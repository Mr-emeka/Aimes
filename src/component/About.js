import React from 'react';
import profile from '../image.jpg';

function About() {
     return (
             <div className="about-section" id="about">
                   <h1 className="about header-1">About</h1>
                   <div className="text">
                   <div>
                    <img src={profile} className="img-profile" alt="profile" />  
                 </div>
                 <div className="about-text">
                    <p>I like JavaScript and everything web.
                     
                    </p>
                    
                    <p>When my dev senses kick-in I build presumably awesome stuff. I stay close to the community and try to keep tabs with the pace at which the web is evolving. I also like to blog what I learn.</p>
                   
                    <p>I built this site from scratch. By scratch, I mean absolutely from scratch without any UI library/framework (except React though) and had so much fun along the way.</p>
                     
                    <p>React-Redux, Node.js,JavaScript,HTML5,CSS3 and PSQL are the main tricks up my sleeve. I am also obsessed with making the web look pretty with CSS.</p>
                   
                    <p className="text-emoji" >
                   \ (•◡•) /
                    </p>
                    </div>
             
                    </div>
              
                    </div>
     )
}

export default About;
