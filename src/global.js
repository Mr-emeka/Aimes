import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-variant: small-caps;
    transition: all 0.25s linear;
  }
  div.modal-content{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `;
