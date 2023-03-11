import styled from "styled-components";

export const StyledFormNewList = styled.form`
  .add-list {
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      color: #ffff;
      font-size: 12px;
      font-weight: 700;
    }

    input {
      height: 26px;
      border-radius: 4px;
      background-color: #b6bbd8;
      color: #ffff;

      ::placeholder {
        color: #ffff;
        font-size: 12px;
        font-weight: 700;
      }
    }

    button {
      background-color: #0f54a0;
      border-radius: 4px;
      height: 26px;
      color: #fff;
    }
  }

  @media (min-width: 426px) {
    width: 100%;
  }
`;
