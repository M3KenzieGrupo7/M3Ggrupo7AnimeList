import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.colors.grey1}
    }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  .App{
    display: flex;
    justify-content: center;
  }

`;
