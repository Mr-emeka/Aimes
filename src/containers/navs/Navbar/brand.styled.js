import styled from "styled-components";

const BrandName = styled.span`
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;
export default BrandName;
