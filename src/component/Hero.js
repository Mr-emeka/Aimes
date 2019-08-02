import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import flogo from '../facebook.svg';
import ilogo from '../instagram.svg';
import llogo from '../linkedin.svg';
import glogo from '../github.svg';
library.add(faCoffee, faCheckSquare)


function Hero() {
     return (
          <div className="hero">
                  <div className="content">
                   <h1 className="text-primary">
                      <span className="primary-main">Ukpai Chukwuemeka</span>
                      <span className="primary-sub">full-stack web developer    
                      <FontAwesomeIcon icon="coffee" />
                      </span>
                   </h1>
                   <div>
                  <a target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/chukwuemeka.ukpai.90" className="icon"><img src={flogo} alt="facebook logo"/></a>
                  <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/ukpai_chukwuemeka/" className="icon"><img src={ilogo} alt="instagram logo"/></a>
                  <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/ukpai-emeka/" className="icon"><img src={llogo} alt="Linkedin logo"/></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mr-emeka" className="icon"><img src={glogo} alt="github logo"/></a>
                  </div>
               </div>
          </div>
     )
}

export default Hero;