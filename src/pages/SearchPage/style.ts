import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 100px auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize18};
  }
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize16};
  }
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize14};
  }

  section {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-width: 200px;
  height: 50px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 36px 0px 43px;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.purple4};
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  :hover,
  :focus,
  :active {
    color: white;
  }
  :hover:before,
  :focus:before,
  :active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    border-radius: 36px 0px 43px;
  }
`;
