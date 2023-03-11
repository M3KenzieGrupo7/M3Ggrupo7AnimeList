import styled from "styled-components";

export const StyledDivLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.58);
  justify-content: center;
  align-items: center;
  img {
    height: 12rem;
    width: 16rem;
  }
`;

export default StyledDivLoading;
