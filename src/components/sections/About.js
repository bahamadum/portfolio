import React from 'react';
import './About.css'; // Import the CSS file for the About section

function About() {
  return (
    <section id="about" className="about-section">
      <div className="content" id='aboutContent'>
        <h2 id='about'>About Me</h2>
        <div className="about-grid">
          <div className="experience">
            <h3>Experience</h3>
            <div className="experience-item">
              <h4>BaTach Priority One Company Ltd</h4>
              <p>Freetown, Sierra Leone </p>
              <p>June 2021 - May 2023 </p>
              <p>Full stack web and mobile development on Klarna's main shopping app infrastructure using React, React Native, and Node.js.</p>
            </div>
            <div className="experience-item">
              <h4>BaTach Priority One Company Ltd</h4>
              <p>Freetown, Sierra Leone</p>
              <p>June 2021 - May 2023 </p>
              <p>Full stack web and mobile development on Klarna's main shopping app infrastructure using React, React Native, and Node.js.</p>
            </div>
            {/* Add more experience items */}
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>BSc. Hons Degree in Software Engineering with Multimedia</h4>
              <p>Limkokwing University of Creative Technology Sierra Leone</p>
              <p>April, 2019 - Current</p>
              <p>Studies included understanding of different computer vision algorithms and their implementation in practice. Subjects also included 3D modeling and projection theory.</p>
            </div>
            <div className="education-item">
              <h4>Bachelor's Degree - Computer Science</h4>
              <p>Riga Technical University</p>
              <p>September, 2010 - May, 2013</p>
              <p>Studies included fundamental computer science subjects such as software & hardware architecture and development. Also an emphasis on automation techniques.</p>
            </div>
            {/* Add more education items */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
