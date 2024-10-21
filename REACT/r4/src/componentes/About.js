import React, { useState } from 'react';
import './styles/about.css'
const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about">
      <h2 className='h2about'>Sobre Mí</h2>
      <p>
        Tengo experiencia en desarrollo web y me especializo en React. 
        {showMore && <span> He trabajado en varios proyectos interesantes, tanto frontend como backend.</span>}
      </p>
      <button className="botonabout "onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Leer Menos' : 'Leer Más'}
      </button>
    </section>
  );
};

export default About;
