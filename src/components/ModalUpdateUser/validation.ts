import { useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../../providers/UserContext";

export const schema = yup
  .object({
    nickname: yup.string().required("Informe um nickname"),
    background: yup.string().required("Escolha uma foto de perfil"),
  })
  .required();

export default schema;
