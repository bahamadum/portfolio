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
              <h4>Horegaly SARL</h4>
              <p>Conakry, Guinea </p>
              <p>May 2016 - December 2018 </p>
              <p>Assistant Sales Manager </p>
              <p>Retained existing customers and substantially grew customer base, product line and sales volume Monitored sales team performance and provided training to help reach targets. Performed sales manager duties with excellence during manager emergencies or absence. Achieved excellent customer service by going the extra mile to tend to customer requests.</p>
            </div>

            {/* <div className="experience-item">
              <h4>BaTach Priority One Company Ltd</h4>
              <p>Freetown, Sierra Leone </p>
              <p>June 2021 - May 2023 </p>
              <p>Senior IT Manager </p>
              <p>Led IT operations for a financial institution, overseeing strategic technology planning, infrastructure management, and regulatory compliance. Managed cross-functional teams, executed critical projects, and ensured secure, efficient, and innovative IT solutions to drive operational excellence and enhance customer experiences.</p>
            </div> */}
{/*             
            <div className="experience-item">
              <h4>B.BLACK ENTERPRISE</h4>
              <p>Freetown, Sierra Leone</p>
              <p>June 2021 - May 2023 </p>
              <p>Sales Manager </p>
              <p>Full stack web and mobile development on Klarna's main shopping app infrastructure using React, React Native, and Node.js.</p>
            </div> */}
            {/* Add more experience items */}
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>BSc. Hons Degree in Software Engineering with Multimedia</h4>
              <p>Limkokwing University of Creative Technology Sierra Leone</p>
              <p>April, 2019 - Current</p>
              <p> Passionate about blending creativity with technology, I've developed a strong foundation in programming languages like Java, C++, Python, and JavaScript. Proficient in both front-end and back-end development, I create visually appealing interfaces with intuitive interactions. My multimedia skills encompass graphic design, motion graphics, and 3D modeling, allowing me to craft immersive user experiences. A collaborative team player, I'm eager to tackle challenges and constantly seek growth opportunities. Beyond tech, I'm a Fantasy Premier League Manager and a diehard Manchester United fan.</p>
            </div>
            <div className="education-item">
              <h4>West Africa Senior School Certificate Examination (WASSCE)</h4>
              <p>Richard Allen High School, Freetown</p>
              <p>September, 2010 - May, 2014</p>
              <p> Coursework in Computer Skills, Financial and Cost Accounting, Mathematics and economics. At the Richard Allen High School, I was a member of the News Journal Union and the Literary & Debating Society. Served as a Class Prefect from 2012 to 2014 and as a School Prefect & Senior Prefect in 2013 and 2014. I represented the school in various quiz and debating competitions with distinction. And I won the third (3rd) Position Proficiency Academic Achievement Award in 2011</p>
            </div>
            {/* Add more education items */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
