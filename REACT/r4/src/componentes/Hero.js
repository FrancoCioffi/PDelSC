import React from 'react';
import './styles/hero.css'

const Hero = () => {
    return (
      <section id="hero">
        <div className="hero-content">
          <div className="name">
            <h1 className="fade-in">Hola, Soy Franco Cioffi</h1>
          </div>
          <div className="skills">
            <p className="fade-in">Desarrollador Web | React</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;