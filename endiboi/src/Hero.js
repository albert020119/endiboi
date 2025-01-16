import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './styles.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>'sup bois</h1>
        <Typed
          className="typed-text"
          strings={[
            "Security Researcher",
            "Provocator of funniness",
            "A woozler",
          ]}
          typeSpeed={60} // Speed of typing
          backSpeed={30} // Speed of deleting
          loop // Loops the typing effect
        />
        {/* Button is now placed below the Typed text */}
        <div className="button-container">
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
