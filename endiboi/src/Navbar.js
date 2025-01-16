import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
      <span className="brand-name">endiboi</span>
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
