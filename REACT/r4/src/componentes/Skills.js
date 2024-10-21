import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <div className="skill-bar">
        <p>React</p>
        <div className="bar">
          <div className="progress" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="skill-bar">
        <p>JavaScript</p>
        <div className="bar">
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
