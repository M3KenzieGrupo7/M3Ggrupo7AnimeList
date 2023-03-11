import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red1};
  width: 100%;
  height: 45px;
  text-align: center;
  padding: 5px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 4px;
  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    border: 1px solid #000;
  }
`;
