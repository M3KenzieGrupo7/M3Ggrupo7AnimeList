import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  width: 100%;
  height: 25px;
  text-align: center;
`;
