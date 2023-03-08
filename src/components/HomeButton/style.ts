import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.green1};
  width: 100%;
  height: 25px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;
  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
`;
