import styled from "styled-components";

export const StyledFormAddList = styled.form`

  .form-select {
    .add-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px px solid;

      label {
        color: #ffff;
        font-size: 12px;
        font-weight: 700;
      }

      select {
        color: #ffff;
        background-color: #b6bbd8;
        border: none;
        padding-left: 20px;
        height: 26px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 700;
      }

      .btn-add {
        background-color: #0f54a0;
        border-radius: 4px;
        height: 26px;
        color: #fff;
      }
    }
  }

  @media (min-width: 426px) {
    width: 100%;
  }
`;
