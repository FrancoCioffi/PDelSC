import React from 'react';
import './styles/hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContainer">
        <div className="name fadeIn">
          <h1>Bienvenido a mi Portfolio</h1>
        </div>
        <div className="skills fadeIn">
          <p>Soy Franco Cioffi, un apasionado programador y el desarrollo centrado en el backend.</p>
          <p>Se programar en C++, Python, PHP, Java, JavaScript, un poco de React, y estoy actualmente aprendiendo React Native.</p>
          <p>No soy muy bueno en frontend o CSS, ¡prefiero el backend!</p>
        </div>
        <div className="cta fadeIn">
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
