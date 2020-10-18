import styled from 'styled-components';
// Toggle.styled.js
const Card = styled.div`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  color:  ${({ theme }) => theme.text};
  padding: 0.3rem;
  text-align:center;
  transition: all .5s;
  &:hover{
    transform: rotate(-1deg);
    }
  span{
      font-size:1em;
  }
  a{
    color:  ${({ theme }) => theme.text};
    text-decoration:none;
    margin:10px 0;
  }
  button{
  background: ${({ theme }) => theme.gradient};
  color:  ${({ theme }) => theme.text};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  padding:0.4em;
  border-radius: 15px;
  font-size:1em;
  font-weight:500;

&:focus{
outline:none;
}
  }
`;
export default Card;
