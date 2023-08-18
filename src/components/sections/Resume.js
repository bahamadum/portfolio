import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="content">
        <h2>Resume</h2>
        <div className="resume-item">
          <h3>Professional Experience</h3>
          <p>Company Name - Position | Date Range</p>
          <ul>
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            {/* Add more responsibilities */}
          </ul>
        </div>
        <div className="resume-item">
          <h3>Education</h3>
          <p>Degree - University | Date Range</p>
          <p>Additional details about your studies.</p>
        </div>
        <div className="download-button">
          <a href="/MY C.V.pdf" download className="resume-button">
            Download PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
