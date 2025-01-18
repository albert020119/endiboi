import React, { useState, useEffect } from "react";
import { AnimatedBackground } from "animated-backgrounds";
import "../styles.css";

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleProjects.length < projects.length) {
        setVisibleProjects((prev) => [...prev, projects[prev.length]]);
      }
    }, 300);
    return () => clearInterval(timer);
  }, [visibleProjects]);

  return (
    <div>
      <AnimatedBackground animationName="particleNetwork" blendMode="normal" />
      <div className="projects-container">
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
