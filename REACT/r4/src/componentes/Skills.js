import React from 'react';
import './styles/skills.css';

const skillsData = [
  { name: 'React', level: '80%' },
  { name: 'JavaScript', level: '70%' },
  { name: 'Python', level: '90%' },
  { name: 'C++', level: '80%' }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillH2">Habilidades</h2>
      <div className="skillContainer">
        {skillsData.map((skill, index) => (
          <div className="skillBar" key={index}>
            <p className="skillP">{skill.name}</p>
            <div className="bar">
              <div className="progreso" style={{ width: skill.level }}>
                <span className="barra">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
