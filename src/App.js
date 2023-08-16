// src/App.js

import React from 'react';
import Header from './components/Header';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Home Section */}
      <section id="home">
        <div className="content">
          <Home />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="content">
          <Projects />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="content">
        <Skills />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <div className="content">
        <About />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume">
        <div className="content">
        <Resume />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog">
        <div className="content">
        <Blog />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="content">
        <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
