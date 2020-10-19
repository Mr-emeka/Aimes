import React from "react";
import { ReactComponent as Loader } from "../../../assets/icons/spinner.svg";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.body};

  svg {
    fill: ${({ theme }) => theme.text};
    height: auto;
    width: 5rem;
  }
  svg {
    animation: Loader-spin infinite 20s linear;
  }

  @keyframes Loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default () => (
  <LoaderContainer className="loader">
    <Loader />
  </LoaderContainer>
);
