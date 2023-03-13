import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledPerfil = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 80px;
  box-sizing: border-box;
  gap: 10px;
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1) 0s;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
  }
:hover{
  
  transform: scale(1.08);
}
  p {
    color: ${({ theme }) => theme.colors.white};
   
    font-weight: bold;
  }

  @media (min-width: 720px) {
    display: flex;
    border-bottom: none;
  }
`;
