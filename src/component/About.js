import React from 'react';
import profile from '../image.jpg';

function About() {
     return (
             <div className="about-section" id="about">
                   <h1 className="about header-1">About Me</h1>
                  <img src={profile} className="img-profile" alt="profile" />  
                 <div className="text">
                    <p></p>
                 </div>
          </div>
     )
}

export default About;
