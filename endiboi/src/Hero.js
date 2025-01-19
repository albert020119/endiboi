import React, { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import { ReactTyped as Typed } from "react-typed";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  const navigate = useNavigate();
  const handleViewMyWorkClick = () => {
    navigate('/projects');
  }
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x7dba,
          color2: 0x4466a8,
          size: 0.5,
          backgroundColor: 0x60d12,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} style={{ width: "100%", height: "100vh" }} id="home">
      <Navbar />
      <section className="hero">

        <div className="hero-container">
          <div className="hero-image">
            <img src="/endre.jpeg" alt="Endre" className="profile-pic" />
          </div>
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
            <div className="button-container">
              <a className="cta-button" onClick={handleViewMyWorkClick}>
                <Link to="/projects">View My Work</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default App;
