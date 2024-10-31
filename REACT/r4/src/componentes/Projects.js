import React, { useState } from 'react';
import './styles/projects.css';

const projectsList = [
  {
    title: 'Project 1',
    description: 'Descripción breve del proyecto 1.',
    link: 'https://enlace-al-proyecto-1', // Enlace al proyecto
  },
  {
    title: 'Project 2',
    description: 'Descripción breve del proyecto 2.',
    link: 'https://enlace-al-proyecto-2',
  },
  {
    title: 'Project 3',
    description: 'Descripción breve del proyecto 3.',
    link: 'https://enlace-al-proyecto-3',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2 className='projectsH2'>Proyectos</h2>
      <div className="projectsGrid">
        {projectsList.map((project, index) => (
          <div key={index} className="projectsCard" onClick={() => setSelectedProject(project)}>
            <h3 className='projectsH3'>{project.title}</h3>
            <p className='projectsP'>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="projectModal">
          <h3 className='projectsH3'>{selectedProject.title}</h3>
          <p className='projectsP'>{selectedProject.description}</p>
          <button onClick={() => window.open(selectedProject.link, '_blank')}>Ver Proyecto</button>
          <button onClick={() => setSelectedProject(null)}>Cerrar</button>
        </div>
      )}
    </section>
  );
};

export default Projects;
