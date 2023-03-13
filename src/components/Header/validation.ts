import * as yup from "yup";

export const schema = yup
  .object({
    name: yup
      .string()
      .required("Informe o Nome da lista")
      .matches(/[a-z]/, "Deve conter ao menos uma letra"),
  })
  .required();

export default schema;
