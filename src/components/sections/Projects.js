import React, { useState } from 'react';
// import './Projects.css'; // Import the CSS file for the Projects section
import bankistImage from '../../images/Bankist.png';
import pigGameImage from '../../images/pigGame.png';
import guessNumberImage from '../../images/guessNumber.png';
// import { Link, Route, Routes } from 'react-router-dom';
// import ProjectDetail from './ProjectDetail';
// import ProjectModal from './ProjectModal'; // Import the ProjectModal component
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';

function Projects() {
  const projectsData = [
    {
      id: 'bankist',
      title: 'Bankist App',
      subtitle: 'Product showcase website',
      backgroundImage: bankistImage,
      alt: 'Bankist Image',
      // Add more project details
    },
    {
      id: 'pig-game',
      title: 'Pig Game',
      subtitle: 'E-commerce website',
      backgroundImage: pigGameImage,
      alt: 'Pig game Image',
      // Add more project details
    },
    {
      id: 'guess-number',
      title: 'Guess My Number',
      subtitle: 'Number guessing game',
      backgroundImage: guessNumberImage,
      alt: 'Guess my Number Image',
      // Add more project details
    },
    // Add more project objects
  ];

  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);


  const getData = (backgroundImage, title, alt) => {
    let tempData = [backgroundImage, title, alt]
    setTempdata(project => [1, ...tempData])

    return setModal(true);
  }

  return (
    <div className="projects py-4 py-lg-5 container">

      <div className='row justify-content-center align-item-center'>

        {projectsData.map((project, index) => {
          return (
                  <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4' key={index}>
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={project.backgroundImage} className="card-img-top" alt={project.alt} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button className='btn btn-primary' onClick={() => getData(project.backgroundImage, project.title, project.alt)}>View Project</button>
                    </div>
                  </div>
                </div>
                )
        })}


      </div>

      {/* <div className="titleWrapper">
        <div className="line-1 active">
          <h3 className="anim-typewriter">projects<span className="blue">.</span></h3>
          <div className="blue_line"></div>
        </div>
      </div>
      <div className="web-development visible">
        <h4>Web design &amp; Development<span className="blue">.</span></h4>
        <div className="blue_line smaller"></div>
      </div>

      <div className="items">
        {projectsData.map((project) => (
          <div
            className="project_box visible"
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              setIsModalOpen(true);
            }}
          >
            <Link to={`/project/${project.id}`}>
              <div className="img_wrap" style={{ backgroundImage: `url(${project.backgroundImage})` }}></div>
              <div className="desc_box" id={`project_${project.id}`} style={{ display: 'initial' }}>
                <div className="title">
                  {project.title}<span className="blue">.</span>
                </div>
                <div className="subtitle">{project.subtitle}</div>
                <div className="tags">web development | web design</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Render the ProjectModal if isModalOpen is true */}
      {/* {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
          active={isModalOpen}
        />
      )} */}

      {/* <Routes>
        {projectsData.map((project) => (
          <Route
            key={`project-detail-${project.id}`}
            path={`/project/${project.id}/*`}
            element={<ProjectDetail project={project} />}
          />
        ))}
      // </Routes> */} 

      {
        modal === true ? <Modal title={tempdata[2]} backgroundImage={tempdata[1]} hide={()=> {setModal(false)}}/> : ''
      }
      
    </div>

  
  );
}

export default Projects;
