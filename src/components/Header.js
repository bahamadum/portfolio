// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
          <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
          <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li><a href="https://github.com/your-username">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/your-username">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
