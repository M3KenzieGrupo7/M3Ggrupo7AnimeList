import styled from "styled-components";

export const StyledPerfil = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 80px;
  box-sizing: border-box;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }

  @media (min-width: 720px) {
    display: flex;
    width: 100px;
    border-bottom: none;
  }
`;
