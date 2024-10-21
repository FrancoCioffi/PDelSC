import React, { useState } from 'react';

const projectsList = [
  { title: 'Project 1', description: 'Description of project 1' },
  { title: 'Project 2', description: 'Description of project 2' },
  { title: 'Project 3', description: 'Description of project 3' }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-modal">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <button onClick={() => setSelectedProject(null)}>Cerrar</button>
        </div>
      )}
    </section>
  );
};

export default Projects;
