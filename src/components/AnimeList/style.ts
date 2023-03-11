import styled from "styled-components";

export const StyledContainerAnimeList = styled.div`
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;
  }
  margin-top: 80px;
  width: 100%;
  gap: 20px;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(182, 187, 216);
  position: relative;
  border-radius: 4px;

  ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 280px;
    padding: 20px;
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
