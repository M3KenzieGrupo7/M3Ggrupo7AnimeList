import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  width: 100%;
  height: 25px;
  text-align: center;
  border-radius: 4px;
  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
`;
