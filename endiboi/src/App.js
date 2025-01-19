import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div id="root">
        <main>
          <Routes>
            {/* Route for the home page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                </>
              }
            />
            {/* Route for the Projects page */}
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Route for the Contact page */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
