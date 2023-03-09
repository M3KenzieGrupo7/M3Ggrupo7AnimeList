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

export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
`;
