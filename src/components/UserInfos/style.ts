import styled from "styled-components";

export const StyledUserInfo = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  padding: 20px;
  width: 100%;
  max-width: 320px;
  border-radius: 8px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.grey2};
  display: flex;
  gap: 25px;
  h2 {
    color: ${({ theme }) => theme.colors.purple4};
    font-size: ${({ theme }) => theme.fonts.fontSize18};
  }
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.fontSize14};
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 120px;
    object-fit: cover;
  }
  button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
