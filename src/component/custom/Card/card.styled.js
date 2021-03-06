import styled from "styled-components";
// Toggle.styled.js
const Card = styled.div`
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  padding: 0.3rem;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  span {
    font-size: 1em;
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 10px 0;
  }
  button {
    background: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    padding: 0.4em;
    border-radius: 15px;
    font-size: 1em;
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.text};

    &:focus {
      outline: none;
    }
  }
`;
export default Card;
