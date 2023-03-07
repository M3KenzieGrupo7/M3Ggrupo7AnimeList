import styled from "styled-components";

interface IHeaderStyleProps {
  isOpen: true | false;
}

export const StyledHeader = styled.header<IHeaderStyleProps>`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.grey2};
`;
