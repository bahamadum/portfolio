// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for the Home section

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="bg-overlay">
        <div className="content">
          <div className="centered-div">
            <div className="left-column">
              <img src="https://lh3.googleusercontent.com/a/AAcHTtdwUCT1tjAuowBwZGAJsHhf7wGRXjUel9dkoqpdV9JaDg=s96-c-rg-br100" alt="Developer" />
            </div>
            <div className="right-column">
              <h1>SORIE BONKAY SILLAH</h1>
              <hr />
              <h3>Software Engineer | Graphic Designer | Front End-Developer</h3>
              <p>Discover my journey in the world of software engineering.</p>
              <button className="cta-button">View More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
