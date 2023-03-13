import styled from "styled-components";
import loginImgBackground from "../../assets/loginBackground.svg";


export const StyledMainLogin = styled.main`
background-image:url(${loginImgBackground});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 100vh;
color: white;
display: flex;
justify-content: center;

.container-infos{
    background-color:${({theme})=> theme.colors.grey};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 67%;
    width: 80%;
    margin: auto;

}

.register-box{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
.register-box > button{
width: 90%;
padding: 10px;
background-color:${({theme})=> theme.colors.purple4};
border: none;
border-radius: 8px;
color: white;


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
    background-color: ${({ theme }) => theme.colors.colorPrimary};
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
}
@media(min-width: 720px){
    .container-infos{
        width: 35%;
    }
}

`