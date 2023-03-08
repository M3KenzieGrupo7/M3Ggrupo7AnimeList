import styled from "styled-components";

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  color: #fff;
  svg {
    width: 100%;
    height: 100%;
  }
  background-color: transparent;
  @media (min-width: 720px) {
    display: none;
  }
`;
