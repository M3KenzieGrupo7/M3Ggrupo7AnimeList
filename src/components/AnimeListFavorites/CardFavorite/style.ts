import styled from "styled-components";

export const StyledFavoriteCard = styled.li`
  width: 100px;
  height: 200px;
  background-color: var(--grey4);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey2};
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1) 0s;

  :hover {
    transform: scale(1.08);
  }
  img {
    width: 100%;
    height: 100px;
    border-radius: 4px 4px 0 0;
  }
  .content {
    height: 70px;
    padding: 8px;
    p {
      width: 100%;
      font-family: "Inter", sans-serif;
      font-size: 11px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .btnRemove {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red1};
    position: initial;
  }

  @media (min-width: 720px) {
    width: 150px;
  }
`;
