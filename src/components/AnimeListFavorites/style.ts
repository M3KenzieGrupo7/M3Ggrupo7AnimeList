import styled from "styled-components";

export const StyledContainerFavoriteList = styled.div`
  /* width: 100%;
  gap: 20px;
  height: 600px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(182, 187, 216);
  position: relative;
  border-radius: 4px;

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
    background-color: rgb(182, 187, 216);
    position: relative;
    border-radius: 4px;
    overflow-x: scroll;
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
