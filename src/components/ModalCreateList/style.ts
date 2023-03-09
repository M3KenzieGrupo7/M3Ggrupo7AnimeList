import styled from "styled-components";
import Input from "../Input";

export const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 100;
  top: 0;
`;

export const Modal = styled.form`
  button {
    width: 150px;
    height: 25px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
  .close {
    width: 50px;
    position: absolute;
    right: 15px;
    top: 15px;
  }
  padding: 15px;
  gap: 15px;
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey};
  label {
    color: ${({ theme }) => theme.colors.white};
  }
`;
