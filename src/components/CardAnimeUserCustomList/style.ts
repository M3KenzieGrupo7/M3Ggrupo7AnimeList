import styled from "styled-components";

export const Card = styled.div`
  width: 130px;
  height: fit-content;
  border: 1px solid #000;
  border-radius: 4px;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize16};
  }
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize12};
  }
  button {
    width: 90%;
    margin: 10px auto;
  }
  div {
    width: 100%;
    height: 140px;
    img {
      border-radius: 4px;
      width: 100%;
      height: 130px;
      object-fit: cover;
    }
  }
`;
