import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      // Already on the home page; just scroll
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the home page and trigger scroll
      navigate('/', { state: { scrollTo: 'about' } });
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <span className="brand-name">endiboi</span>
        </Link>
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" state={{ scrollTo: 'home' }}>
            Home
          </Link>
        </li>
        <li>
        <a
            onClick={handleAboutClick}
            className="nav-link" /* Ensure it has the same class */
          >
            About
          </a>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
