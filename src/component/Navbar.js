import React from 'react';
import image from '../dev.png'

function Navbar() {
  return (
     <nav className="navbar" id="home" >
         <div className="brand">
           <a href="/"> <img src={image} alt="Developer Ukpai" /></a>
         </div>
              <ul className="navbar-list">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
              <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
              </ul>

     </nav>
  );
}

export default Navbar;
