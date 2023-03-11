import styled from "styled-components";

export const StyledForm = styled.form`
  height: 45%;
  width: 90%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 31px;
  justify-content: space-between;
  button {
    padding: 10px;
    background-color:${({theme})=> theme.colors.colorSecundary};
    border: none;
    border-radius: 8px;
    color: white;
  }
  p{
    color: ${({theme})=> theme.colors.red1};
    font-size: var(0.875rem);
    font-weight: bold;
  }
`;
