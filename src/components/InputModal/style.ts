import styled from "styled-components";

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: 25px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.fonts.radius4};
  outline: none;
  border-radius: 4px;
`;
