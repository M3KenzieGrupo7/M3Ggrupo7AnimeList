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
    gap: 26px;
    padding: 3px;
  };
  .button-box{
    flex-direction: initial;
  }
  .register-btn{
    background-color: #0EB770;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 8px;
    width: 6.12rem;
  }
  .box-info{
    background-color: rgba(0,0,0,0.5);
  }
  .login-btn{
    background-color: #0F54A0;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 8px;
    width: 6.12rem;
  }
  h1{
    line-height: 2rem;
  }
  @media(min-width: 720px){
    .void-div{
      width: 77vw;
    }
    div{
      width: 55vw;
    }
    .box-info{
      width: 58%;
    }
  }
`;
