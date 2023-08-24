// src/App.js

import React from 'react';
import Header from './components/Header';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/sections/ProjectDetail'; // Create this component for detailed project view
// import ProjectModal from './components/sections/ProjectModal';
// import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
      <Header />

      {/* Home Section */}
      <section id="home">
        <div className="content">
          <Home />
        </div>
      </section>

      {/* About Me Section */}
            <section id="about">
        <div className="content">
        <About />
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills">
        <div className="content">
        <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="content">
          <Projects />
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact">
        <div className="content">
        <Contact />
        </div>
      </section>

      {/* Footer */}
   
        <Routes>
        <Route path="/project/:id/*" element={<ProjectDetail />} />
        </Routes>

    
      <footer>
        <p>&copy; 2023 Amadu Mustapha Bah </p>
      </footer>

      </Router>
    </div>
  );
}

export default App;
