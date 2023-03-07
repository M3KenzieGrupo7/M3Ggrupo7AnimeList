import styled from "styled-components";
import imgBackgroud from "../../assets/registerimg.svg"
export const StyledMainRegister = styled.main`
background-image: url(${imgBackgroud});
background-size: cover;
width: 100vw;
height: 100vh;
color: white;
.info-box-form{
    
    background-color:#222121 ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 73%;
    width: 80%;
    margin: auto;
 
}
form{
   
    width: 90%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 31px;
}
form > button{
  
  padding: 10px;
  background-color: #0EB770;
  border: none;
  border-radius: 8px;
  color: white;
  }
`