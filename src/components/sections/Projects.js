// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for the Projects section
import projectImage1 from '../../images/rockPaper.png';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="content">
        <h2>Projects</h2>
        <div className="project-cards">
          {/* Example Project Card */}
          <div className="project-card">
            <img src="project-image.jpg" alt="Project" />
            <h3>Project Name</h3>
            <p>Project description goes here...</p>
            <div className="project-links">
              <a href="https://github.com/your-username/project-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project-demo-url.com" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
          <div className="project-card">
            <img src={projectImage1} alt="Project" />
            <h3>Project Nameeeee dffg</h3>
            <p>Project description goes here... yguyugadhghdas hjgshgdh hjgdshd jksdsa kjhjas hjghad hja</p>
            <div className="project-links">
              <a href="https://github.com/your-username/project-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project-demo-url.com" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>

          <div className="project-card">
            <img src={projectImage1} alt="Project" />
            <h3>Project Name</h3>
            <p>Project description goes here...</p>
            <div className="project-links">
              <a href="https://github.com/your-username/project-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project-demo-url.com" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/images/rockPaper.png" alt="Project" />
            <h3>Project3 Name tyrytrtsdhg hjadsghd</h3>
            <p>Project description goes here...</p>
            <div className="project-links">
              <a href="https://github.com/your-username/project-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project-demo-url.com" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>

          <div className="project-card">
            <img src="project-image.jpg" alt="Project" />
            <h3>Project Name</h3>
            <p>Project description goes here...</p>
            <div className="project-links">
              <a href="https://github.com/your-username/project-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project-demo-url.com" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>

          <div className="project-card">
            <img src="project-image.jpg" alt="Project" />
            <h3>Project Name</h3>
            <p>Project description goes here...</p>
            <div className="project-links">
              <a href="https://github.com/your-username/project-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://project-demo-url.com" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>

          {/* Add more project cards */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
