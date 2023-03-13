import styled from "styled-components";

export const StyledContainerAnimeList = styled.div`
  flex-direction: column;
  margin-top: 80px;
  /* width: 100%; */
  gap: 20px;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  padding: 20px;
  background-color: rgb(182, 187, 216);
  border-radius: 4px;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;
  }

  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 25px;
    
    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 20px;
      width: 100%;
      height: 280px;
      padding: 20px;
      background-color: rgb(182, 187, 216);
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
  }

`;
