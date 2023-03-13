import styled from "styled-components";

export const StyledContainerFavoriteList = styled.div`
  width: 100%;
  max-width: 1024px;
  gap: 20px;
  height: 600px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey2};

  button {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;
  }
  ul {
    display: flex;
    flex-wrap: nowrap;
    /* justify-content: center; */
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 280px;
    position: relative;
    border-radius: 4px;
    overflow-x: auto;
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
`;
export const StyledModalFavorite = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 3000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.62);
  display: flex;
  justify-content: center;
  align-items: center;
`;
