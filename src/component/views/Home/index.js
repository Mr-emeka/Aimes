import React from 'react';
import Layout from '../../layout'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Skill from '../Skill'
import { ReactComponent as Home } from '../../../assets/icons/landing.svg';
import styled from 'styled-components';
import { FaCloudDownloadAlt, FaChevronUp } from "react-icons/fa";
import file  from '../../../assets/docs/Resume.docx'
import useScrollTop from '../../../useScrolltop'

const HomeContent = styled.div`
  color:  ${({ theme }) => theme.text};
  position: absolute;
 right: 7em;
  top: 15em;
  @media screen and (max-width:360px){
        display:none;
    }
h3{
 @media screen and (max-width: 780px) {
        font-size:1em;
    }
   
    span{
    font-size:.6em;
    }
}
`;
const Background = styled.span`
  position: fixed;
    bottom: 50px;
    right: 10px;
svg{
    fill:  ${({ theme }) => theme.text};
    background:${({ theme }) => theme.gradient};
    border-radius: 50%;
    padding:5px;
    
}
`
export default ({ toggleTheme, theme, projects }) => {
    const { top } = useScrollTop();
    const showPoint = 1000;
    return (<Layout toggleTheme={toggleTheme} theme={theme}>
        <div>
            <Home className="landing-svg" />
            <HomeContent>
                <h3>Ukpai Chukwuemeka <span className="text-danger"> - Aimes.js</span> </h3>
                <h6 className="text-center">Full Stack Web Developer</h6>
            </HomeContent>

        </div>

        <About />
        <Skill />
        <Portfolio projects={projects} />
        <Contact />
        <a href={file} target="_blank" rel="noopener noreferrer" download>
            <FaCloudDownloadAlt className="resume" />
        </a>
        {top > showPoint ? <Background>
            <FaChevronUp className="scroll" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} />
        </Background> : ''
        }
    </Layout>
    )
}