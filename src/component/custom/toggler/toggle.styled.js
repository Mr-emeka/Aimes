import styled from "styled-components";
// Toggle.styled.js
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.3rem;
  position: relative;
  outline: none;
  &:focus {
    outline: none;
  }

  svg {
    height: auto;
    width: 1.3rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
      fill: ${({ theme }) => theme.text};
    }
  }
`;
export default ToggleContainer;
