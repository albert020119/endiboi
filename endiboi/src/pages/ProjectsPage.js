import React, { useState, useEffect } from 'react';
import '../styles.css';

const projects = [
  {
    title: 'APK Analyzer',
    description:
      'My diploma work. I essentially created an Anti Virus for Android. Aside from the standard boring static analysis, the project uses Frida hooking to perform dynamic analysis on downloaded APK files on the users device.',
    images: ['frida.png', 'android.png'],
    techStack: ['FastAPI', 'Java', 'JavaScript', 'Emulators'],
  },
  {
    title: 'Project 2',
    description: 'A detailed description of project 2.',
    images: ['/path/to/image3.jpg', '/path/to/image4.jpg', '/path/to/image5.jpg'],
    techStack: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Project 3',
    description: 'A detailed description of project 3.',
    images: ['/path/to/image6.jpg', '/path/to/image7.jpg'],
    techStack: ['Java', 'Spring Boot', 'MySQL'],
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
      <div className="content">
        <div className="projects-container">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Title and Description */}
              <div className="project-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              {/* Images in a row */}
              <div className="project-images-row">
                {project.images &&
                  project.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                    />
                  ))}
              </div>

              {/* Tech Stack in a row below the images */}
              <div className="tech-stack">
                {project.techStack &&
                  project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-icon">
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
