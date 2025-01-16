import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import './styles.css';

const App = () => {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
