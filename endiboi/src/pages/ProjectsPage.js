import React, { useState, useEffect, useRef } from "react";
import { AnimatedBackground } from "animated-backgrounds";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import "../styles.css";
import Navbar from '../Navbar';
const projects = [
  {
    title: "APK Analyzer",
    description:
      "My diploma work. I essentially created an Anti Virus for Android. Aside from the standard boring static analysis, the project uses Frida hooking to perform dynamic analysis on downloaded APK files on the user's device.",
    images: ["frida.png"],
    techStack: ["Python", "FastAPI", "Java", "JavaScript", "Emulators", "Android OS"],
  },
  {
    title: "qESTkit",
    description:
      "A quantum circuit simulation library, created together with a few colleagues. We essentially created a fully fledged quantum simulator and ran Grover on it",
    images: ["quantum.png"],
    techStack: ["Python", "Quantum Computing", "Matplotlib", "Numpy", "QKD"],
  },
  {
    title: "Rust Type Racer",
    description: "A command line typeracer. Creating this was an excuse to learn Rust",
    images: ["rust.png"],
    techStack: ["Rust", "Command line", "TTY"],
  },
];

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const [allProjectsLoaded, setAllProjectsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleProjects.length < projects.length) {
        setVisibleProjects((prev) => [...prev, projects[prev.length]]);
      } else {
        setAllProjectsLoaded(true); // Mark all projects as loaded
        clearInterval(timer);
      }
    }, 1);

    return () => clearInterval(timer);
  }, [visibleProjects]);

  useEffect(() => {
    if (allProjectsLoaded && !vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: window.innerHeight,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f71ff,
          backgroundColor: 0x60d12,
          maxDistance: 15.00,
          spacing: 20.00
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [allProjectsLoaded, vantaEffect]);

  const projects = [
    {
      title: "APK Analyzer",
      description:
        "My diploma work. I essentially created an Anti Virus for Android. Aside from the standard boring static analysis, the project uses Frida hooking to perform dynamic analysis on downloaded APK files on the user's device.",
      images: ["frida.png"],
      techStack: ["Python", "FastAPI", "Java", "JavaScript", "Emulators", "Android OS"],
    },
    {
      title: "qESTkit",
      description:
        "A quantum circuit simulation library, created together with a few colleagues. We essentially created a fully fledged quantum simulator and ran Grover on it",
      images: ["quantum.png"],
      techStack: ["Python", "Quantum Computing", "Matplotlib", "Numpy", "QKD"],
    },
    {
      title: "Rust Type Racer",
      description: "A command line typeracer. Creating this was an excuse to learn Rust",
      images: ["rust.png"],
      techStack: ["Rust", "Command line", "TTY"],
    },
  ];

  return (
    <div ref={myRef} style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <div className="projects-container" style={{ paddingBottom: "2rem" }}>
        {visibleProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.images[0]}
              alt={`Project ${index + 1}`}
              className="project-image-container"
            />
            <div className="project-details">
              <div className="project-text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="project-tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProjectsPage;
