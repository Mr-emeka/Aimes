import React from "react";
import styled from "styled-components";
import {
  FaNode,
  FaGit,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaLess,
  FaReact,
  FaJava,
  FaJsSquare,
  FaSass,
} from "react-icons/fa";
import { DiPostgresql,DiMongodb } from "react-icons/di";

const Skills = styled.div`
  cursor: pointer;
  margin: 2em auto;
  text-align: center;
  svg {
    width: 5em;
    height: auto;
    padding: 0 10px 15px;
    fill: ${({ theme }) => theme.text};
    transition: all 0.5s;
    &:hover {
      transform: rotate(-5deg) scale(1.3);
    }
  }
`;
export default () => {
  return (
    <>
      <div className="container-fluid px-4">
        <div className="about-skills" id="skils">
          <div className="row">
            <Skills className="skills-content">
              <FaNode />
              <FaGit />
              <FaHtml5 />
              <FaFigma />
              <FaJava />
              <FaJsSquare />
              <FaSass />
              <FaCss3Alt />
              <FaReact />
              <FaLess />
              <DiPostgresql />
              <DiMongodb />
            </Skills>
          </div>
        </div>
      </div>
    </>
  );
};
