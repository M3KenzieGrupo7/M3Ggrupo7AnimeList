import styled from "styled-components";
import img from "../../assets/dashBackground.svg";

export const StyledMain = styled.main`
z-index: 0;
  background-image:url(${img}) ;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;

 color: white;
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    padding: 3px;
  };
  .button-box{
    flex-direction: initial;
    display: flex;
    gap: 10px;
    width: 92%;
    margin-top: 14px;
  }
  .register-btn{
    background-color: ${({theme})=> theme.colors.colorSucess};
    border: none;
    padding: 10px;
    color: white;
    border-radius: 8px;
    width: 10.12rem;
    
  }
  .box-info{
    background-color: rgba(0, 0, 0, 0.2);
    width: 80%;
  }
  img{
    height: 7rem;
  }
 h2{
    text-align: center;
    font-variant: petite-caps;
 }
  .login-btn{
    background-color: ${({theme})=> theme.colors.colorPrimaryFocus};
    border: none;
    padding: 10px;
    color: white;
    border-radius: 8px;
    width: 10.12rem;
    
  }
  @-webkit-keyframes login-btn {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
@keyframes login-btn {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
.login-btn {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.login-btn:hover, .login-btn:focus, .login-btn:active {
  -webkit-animation-name: login-btn;
  animation-name: login-btn;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
  @-webkit-keyframes register-btn {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
@keyframes register-btn {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
.register-btn {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.register-btn:hover, .register-btn:focus, .register-btn:active {
  -webkit-animation-name: register-btn;
  animation-name: register-btn;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
  h1{
    line-height: 2rem;
  }
  @media(min-width: 720px){

    display: flex;
    justify-content: flex-end;
 
    .box-info{
      width: 44%;
      background-color:unset;
      padding: 17px;
    }
    .login-btn ,.register-btn{
      font-size: 1.3rem;
    }
  }
`;
