import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  width: 150px;
  min-width: 150px;
  height: 220px;
  border: 1px solid #000;
  border-radius: 4px;
  position: relative;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.grey2};
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize16};
  }
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize12};
  }
  button {
    position: absolute;
    bottom: 15px;
    margin: 10px 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.red1};
    color: ${({ theme }) => theme.colors.white};
    :hover {
      background-color: ${({ theme }) => theme.colors.red2};
      color: ${({ theme }) => theme.colors.white};
    }
    border-radius: 4px;
  }
  div {
    width: 100%;
    height: 140px;
    img {
      border-radius: 4px;
      width: 100%;
      height: 130px;
      object-fit: cover;
    }
  }
`;
