import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();

  const projectDetails = {
    'bankist': {
      title: 'Bankist App',
      subtitle: 'Product showcase website',
      tags: 'web development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      demoLink: 'https://example.com/bankist-demo',
      githubLink: 'https://github.com/yourusername/bankist',
    },
    'pig-game': {
      title: 'Pig Game',
      subtitle: 'E-commerce website',
      tags: 'web development | web design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      demoLink: 'https://example.com/pig-game-demo',
      githubLink: 'https://github.com/yourusername/pig-game',
    },
    // Add more project details for other IDs
  };

  const selectedProject = projectDetails[id];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-header">
        <h2>{selectedProject.title}</h2>
        <div className="project-subtitle">{selectedProject.subtitle}</div>
        <div className="project-tags">{selectedProject.tags}</div>
      </div>
      <div className="project-description">{selectedProject.description}</div>
      <div className="project-links">
        <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectDetail;
