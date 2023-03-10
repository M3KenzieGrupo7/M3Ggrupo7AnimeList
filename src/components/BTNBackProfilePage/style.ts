import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkBackProfilePage = styled(Link)`
  margin: 15px 0 15px 15px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  color: ${({ theme }) => theme.colors.white};
  :hover {
    background-color: ${({ theme }) => theme.colors.colorPrimaryFocus};
    color: ${({ theme }) => theme.colors.white};
  }
  border-radius: 4px;
`;
