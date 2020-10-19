import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../../../assets/icons/cross.svg";
import useViewport from "../../../useViewport";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaStackOverflow,
  FaGithub,
} from "react-icons/fa";
import { Link as SLink } from "react-scroll";

const Container = styled.div`
  position: fixed;
  z-index: 200;
  width: 100%;
  overflow: hidden;
  height: 100%;
  top: 0;
  background: ${({ theme }) => theme.body};
  div {
    padding: 1.3em 1.4em;
  }
  div {
    h3 {
      a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
      }
    }
    ul {
      list-style-type: none;
      margin-top: 1em;
      font-size: 1.5em;
      padding: 0 !important;
      li {
        a {
          color: ${({ theme }) => theme.text};
          text-decoration: none;
        }
      }
    }
  }
  svg {
    fill: ${({ theme }) => theme.text};
    height: auto;
    width: 1.5rem;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      transform: rotate(-2deg) scale(1.4);
    }
  }
`;
export default ({ open, setOpen }) => {
  const { width } = useViewport(setOpen);
  const breakpoint = 780;

  return width < breakpoint && open ? (
    <Container className={open ? "show-sidebar" : "hide-sidebar"}>
      <div className="d-flex justify-content-end">
        <Close onClick={() => setOpen(false)} />
      </div>
      <div className="flex-column text-center">
        <h3>
          <Link to="/" onClick={() => setOpen(false)}>
            {" "}
            Aimes
          </Link>
        </h3>
        <ul>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <SLink
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              About
            </SLink>
          </li>
          <li className="nav-item">
            <SLink
              activeClass="active"
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Portfolio
            </SLink>
          </li>
          <li className="nav-item">
            <Link to="#" onClick={() => setOpen(false)} className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <SLink
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Contact
            </SLink>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/mr-emeka"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaGithub />
        </a>
        <a
          href=" https://www.linkedin.com/in/chukwuemeka-ukpai-7232571a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/chukwuemeka.ukpai.75/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/officialaimes/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/aimes_js"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaTwitter />
        </a>
        <a
          href=" https://stackoverflow.com/users/13719671/ukpai-chukwuemeka"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <FaStackOverflow />
        </a>
      </div>
    </Container>
  ) : (
    ""
  );
};
