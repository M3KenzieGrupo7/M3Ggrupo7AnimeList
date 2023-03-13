import styled from "styled-components";

export const StyledAnimeCard = styled.li`
  width: 100px;
  height: 200px;
  background-color: var(--grey4);
  border-radius: 4px;
  background-color: #d9d9d9;

  img {
    width: 100px;
    height: 100px;
    border-radius: 4px 4px 0 0;
  }

  .content {
    height: 70px;
    padding: 8px;

    p {
      white-space: wrap;
      width: 100%;
      max-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;

      font-family: "Inter", sans-serif;
      font-size: 11px;
      font-weight: 500;
    }
  }

  .containerBtns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .btnAddList {
      height: 20px;
      width: 20px;
      cursor: pointer;
      color: #6d4d82;
    }

    .btnFavorite {
      cursor: pointer;
      color: #6d4d82;
    }
  }
`;
