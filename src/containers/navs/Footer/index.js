import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaStackOverflow, FaGithub } from "react-icons/fa";
import styled from 'styled-components'

const SocialSection = styled.div`
text-align:center;
a{
    svg{
        width:1.3em;
        height:auto;
        fill:${({ theme }) => theme.text};
        transition: all .5s;
        &:hover{
        transform: rotate(-2deg) scale(1.3);
        }
    }
}
`;

export default () => {
    return <footer>
        <div className="d-md-flex px-3 justify-content-between">
            <div>
                <p className="text-center">Aimes_js<span className="footer-span"> &copy;  {new Date().getFullYear()}</span></p>
            </div>

            <SocialSection>
                <a href="https://github.com/mr-emeka" target="_blank" rel="noopener noreferrer" className="p-2">
                    <FaGithub />
                </a>
                <a href=" https://www.linkedin.com/in/chukwuemeka-ukpai-7232571a1/" target="_blank" rel="noopener noreferrer" className="p-2" >

                    <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com/chukwuemeka.ukpai.75/" target="_blank" rel="noopener noreferrer" className="p-2">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/officialaimes/" target="_blank" rel="noopener noreferrer" className="p-2">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/aimes_js" target="_blank" rel="noopener noreferrer" className="p-2">
                    <FaTwitter />
                </a>
                <a href=" https://stackoverflow.com/users/13719671/ukpai-chukwuemeka" target="_blank" rel="noopener noreferrer" className="p-2">
                    <FaStackOverflow />
                </a>

            </SocialSection>
        </div>
    </footer>
}