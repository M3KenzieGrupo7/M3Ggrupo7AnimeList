import styled from "styled-components";

interface iModalProps {
  open: string;
}

export const StyledModalEdit = styled.div<iModalProps>`
  position: fixed;
  display: ${(props) => props.open};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  .container-modal {
    border: 1px solid;
    border-radius: 4px;
    color: #ffff;
    background-color: #222121;
    border-radius: 4px;
    margin: 0 auto;
    max-width: 369px;
    height: 150px;

    p {
      font-size: 12px;
      font-weight: bold;
      color: #ffff;
      cursor: pointer;
      padding: 5px 0px 0px 10px;
    }

    .container-forms {
      display: flex;
      align-items: center;
      padding: 10px;
      justify-content: space-between;
      gap: 20px;

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
    }
  }

  @media (min-width: 426px) {
    width: 100%;
  }
`;
