import styled from "styled-components";

export const AnimeCardsList = styled.div`
  width: 100%;
  min-height: 320px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  h1 {
    color: #fff;
  }
  justify-content: center;
`;
export const StyledHeaderDisplayList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledBTNBack = styled.button`
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
