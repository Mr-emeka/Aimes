import React from "react";
import Layout from "../../layout";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Skill from "../Skill";
import { ReactComponent as Home } from "../../../assets/icons/landing.svg";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
// import file from "../../../assets/docs/Resume.docx";
import useScrollTop from "../../../useScrolltop";
import BModal from "../../custom/Modal";
import { Modal } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import Sparkles from "./../../custom/Sparkles/index";

const HomeContent = styled.div`
  color: ${({ theme }) => theme.text};
  position: absolute;
  right: 7em;
  top: 15em;
  @media screen and (max-width: 360px) {
    display: none;
  }
  h3 {
    @media screen and (max-width: 780px) {
      font-size: 1em;
    }

    span {
      font-size: 0.6em;
    }
  }
`;
// const Download = styled.a`
//   svg {
//     position: fixed;
//     bottom: 95px;
//     right: 10px;
//     width: 2.5em;
//     height: auto;
//     cursor: pointer;
//     fill: ${({ theme }) => theme.text};
//   }
// `;
const Background = styled.span`
  position: fixed;
  bottom: 50px;
  right: 10px;
  svg {
    fill: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.gradient};
    border-radius: 50%;
    padding: 5px;
  }
`;
export default ({ toggleTheme, theme, projects }) => {
  const { top } = useScrollTop();
  const showPoint = 1000;
  const [modalShow, setModalShow] = React.useState(false);
  const [details, setDetails] = React.useState();

  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <div>
        <Home className="landing-svg" />
        <HomeContent>
          <h3>
            Ukpai Chukwuemeka <span className="text-danger"> - Aimes.js</span>{" "}
          </h3>
          <h6 className="text-center">Full Stack Web Developer</h6>
        </HomeContent>
      </div>

      <About />
      <Skill />
      <Portfolio
        projects={projects}
        modalShow={modalShow}
        setModalShow={setModalShow}
        details={details}
        setDetails={setDetails}
      />
      <Contact />
      {/* <Download href={file} target="_blank" rel="noopener noreferrer" download>
        <FaCloudDownloadAlt />
      </Download> */}
      {top > showPoint ? (
        <Background>
          <FaChevronUp
            className="scroll"
            onClick={() => scroll.scrollToTop()}
          />
        </Background>
      ) : (
        ""
      )}
      {/* Modal */}

      <BModal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            <Sparkles>Cras mattis consectetur </Sparkles> purus sit amet
            fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </BModal>
    </Layout>
  );
};
