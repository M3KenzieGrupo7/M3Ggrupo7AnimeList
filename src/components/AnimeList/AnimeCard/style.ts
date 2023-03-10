import styled from "styled-components";

export const StyledAnimeCard = styled.li`
  width: 100px;
  height: 70%;
  background-color: var(--grey4);
  border-radius: 4px;
  background-color: #d9d9d9;

  img {
    width: 100px;
    height: 100px;
    border-radius: 4px 4px 0 0;
  }

  p {
    white-space: nowrap;
    width: 100%;
    overflow: hidden; /* "overflow" value must be different from "visible" */
    text-overflow: ellipsis;

    font-size: 11px;
    font-weight: 500;
  }

  button {
    background-color: #0f54a0;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`;
