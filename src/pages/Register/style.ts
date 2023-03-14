import styled from "styled-components";

export const StyledMainRegister = styled.main`
  background-image: url("../../assets/registerimg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  color: white;
  .info-box-form {
    background-color: ${({ theme }) => theme.colors.grey};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 11px;
    width: 80%;
    margin: auto;
  }
  .link-box {
    padding: 11px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  a {
    color: white;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.green1};
  }
  @media (min-width: 720px) {
    .info-box-form {
      width: 45%;
    }
  }
  @media (min-width: 1100px) {
    .info-box-form {
      width: 32%;
    }
  }
`;
