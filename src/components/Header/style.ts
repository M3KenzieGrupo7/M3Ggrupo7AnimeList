import styled from "styled-components";

interface IHeaderStyleProps {
  isOpen: true | false;
}

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.grey2};
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  gap: 10px;

  @media (min-width: 720px) {
  }
`;
export const HeaderDropBox = styled.div<IHeaderStyleProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  @keyframes open {
    0% {
      top: -20px;
    }
    100% {
      top: 60px;
    }
  }
  @keyframes close {
    0% {
      top: 60px;
    }
    100% {
      top: -20px;
    }
  }
  animation-name: open;
  animation-duration: 0.5s;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  gap: 5px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.grey2};
  @media (min-width: 720px) {
    display: flex;
    position: unset;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 50px;
    div {
      gap: 10px;
      width: fit-content;
    }
  }
`;
