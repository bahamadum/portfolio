import React, { useEffect } from 'react';
import './ProjectModal.css'; // Import the CSS file for the modal
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ProjectModal({ project, onClose, active }) {
  useEffect(() => {
    // Add class to disable scrolling when the modal opens
    document.body.classList.add('modal-open');
    // Add an event listener to prevent scroll when the modal is open
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    };
  }, [active]);

  if (!project) {
    return null;
  }

  return (
    <div className={`modal-overlay ${active ? 'active' : ''}`}>
      <div className="modal-container">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className='imgContainer'>
            <img src={project.backgroundImage} alt={project.title} className="modal-image" />
          </div>
          <div className='modalContent'>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.subtitle}</p>
          </div>
          <div className="modal-buttons">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
