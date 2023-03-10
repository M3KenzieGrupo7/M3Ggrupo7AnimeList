import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDivList = styled.div`
  margin-top: 30px;
  width: 100%;
  height: fit-content;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.grey2};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px;
`;

export const StyledBTNCreateList = styled.button`
  margin-top: 15px;
  margin-left: 15px;
  padding: 10px;
  border: none;
  border-radius: ${({ theme }) => theme.fonts.radius4};
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  color: ${({ theme }) => theme.colors.white};
  :hover {
    background-color: ${({ theme }) => theme.colors.colorPrimaryFocus};
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.colorSecundary};
  color: ${({ theme }) => theme.colors.colorPrimary};
  :hover {
    background-color: ${({ theme }) => theme.colors.colorPrimaryFocus};
    color: ${({ theme }) => theme.colors.white};
  }
  border-radius: 4px;
`;
