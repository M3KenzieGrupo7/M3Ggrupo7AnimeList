import * as yup from "yup";


export const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial")
      .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
      repeatPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "confirmação de senha deve ser igual a senha"
      )
      .required("Confirmação de senha obrigatória"),
      nickname:yup.string().required("Informe um nickname"),
      background: yup.string().required("Escolha uma foto de perfil"),

  }).required();


export default schema