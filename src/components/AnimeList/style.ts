import styled from "styled-components";
export const StyledContainerAnimeList = styled.div`
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.white};
  }
  margin-top: 80px;
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grey2};
  position: relative;
  border-radius: 4px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    width: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.grey1};
    position: relative;
    border-radius: 4px;
  }
  ul::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  ul::-webkit-scrollbar-track {
    background: rgb(217, 217, 217);
    border-radius: 4px;
  }
  ul::-webkit-scrollbar-thumb {
    background: #6d4d82;
    border-radius: 4px;
  }
  @media (min-width: 720px) {
    ul {
      overflow-x: unset;
      flex-wrap: wrap;
    }
  }
`;
