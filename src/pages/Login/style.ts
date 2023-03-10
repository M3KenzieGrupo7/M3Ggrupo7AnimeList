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
background-color:${({theme})=> theme.colors.colorPrimary};
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