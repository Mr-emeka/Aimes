import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Footer from './component/Footer';

function App() {
  return (
    <div>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Footer />
    </div>
  );
}

export default App;
