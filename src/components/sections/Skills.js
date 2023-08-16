import React from 'react';
import './Skills.css'; // Import the CSS file for the Skills section

function Skills() {
  return (



    <section id="skills" className="skills-section">
      <div className="content">
        <h2>Skills</h2>
        <div className="skills-grid">
        <div className="skill-card">
            <div className="skill-content">
              <h3>Programming Languages</h3>
              <div className="sub-skill">
              <p>JavaScript</p>
                <div className="skill-level">
                  <div className="skill-level-bar" style={{ width: '80%' }}></div>
                </div>
                
              </div>
              <div className="sub-skill">
              <p>Python</p>
                <div className="skill-level">
                  <div className="skill-level-bar" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-content">
              <h3>Front-End Development</h3>
              <div className="skill-level">
                <div className="skill-level-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-content">
              <h3>Back-End Development</h3>
              <div className="skill-level">
                <div className="skill-level-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
