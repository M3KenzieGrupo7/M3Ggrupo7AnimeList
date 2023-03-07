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
    background-color:rgb(34, 33, 33, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 54%;
    width: 80%;
    margin: auto;

}
form{
    height: 45%;
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
background-color: #0F54A0;
border: none;
border-radius: 8px;
color: white;
}
@media(min-width: 720px){
    .container-infos{
        width: 35%;
    }
}

`