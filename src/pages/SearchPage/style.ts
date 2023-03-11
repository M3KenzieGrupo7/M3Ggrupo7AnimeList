import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 100px auto;
  padding: 15px;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize18};
  }
`;
