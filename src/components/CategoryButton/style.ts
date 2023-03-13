import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.colorSucess};
  width: 100%;
  height: 45px;
  text-align: center;
  padding: 5px;
  color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 8px;

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

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
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    border-radius: 8px;
  }
  :hover,
  :focus,
  :active {
    color: white;
  }
  :hover:before,
  :focus:before,
  :active:before {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
`;
