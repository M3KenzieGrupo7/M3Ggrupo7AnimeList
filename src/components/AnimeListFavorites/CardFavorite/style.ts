import styled from "styled-components";

export const StyledFavoriteCard = styled.li`
  width: 100px;
  height: 190px;
  background-color: var(--grey4);
  border-radius: 4px;
  background-color: #d9d9d9;

  img {
    width: 100px;
    height: 100px;
    border-radius: 4px 4px 0 0;
  }

  .content {
    height: 50px;
    padding: 8px;

    p {
      font-size: 11px;
      font-weight: 500;
    }
  }

  .btnRemove {
    height: 25px;
    width: 25px;
    cursor: pointer;
    color: #6d4d82;
    padding-left: 5px;
  }
`;
