import styled from 'styled-components';

const NavList = styled.ul`
  cursor: pointer;
  font-size: 1rem;
  outline:none;
  margin-bottom: 0 !important;
  &:focus{
    outline:none;
  }
  li {
        list-style-type: none;
       
    }
  a {
        text-decoration: none;
        color:  ${({ theme }) => theme.text};
    }
`;
export default NavList;