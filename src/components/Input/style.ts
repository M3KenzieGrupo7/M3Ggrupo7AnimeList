import styled from "styled-components";

export const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input {
    background-color: #b6bbd8;
    border-radius: 8px;
    padding: 10px;
    border: none;
  }
  ::placeholder {
    color: white;
    display: flex;
    align-items: center;
  }
`;
