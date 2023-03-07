import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { StyledMainRegister } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { SubmitHandler } from "react-hook-form/dist/types";

interface iRegister {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
  nickname: string;
  background: string;
  message?: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: errors,
  } = useForm<iRegister>({ resolver: yupResolver(schema) });
  const{registerUser} = useContext(UserContext)
  const submit: SubmitHandler<iRegister> = (formData) => {
    registerUser(formData)
    reset();
  };
  return (
    <StyledMainRegister>
      <div>
        <div className="info-box-form">
          <p>Voltar ao login</p>

          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              type="text"
              label="Nome:"
              placeholder="Informe seu nome"
              id="name"
              register={register("name")}
              
              errors={errors.errors.name}
            />
            <Input
              type="email"
              label="E-mail:"
              placeholder="Informe um e-mail"
              id="email"
              register={register("email")}
              errors={errors.errors.email}
            />
            <Input
              type="password"
              label="Senha:"
              placeholder="*******"
              id="password"
              register={register("password")}
              errors={errors.errors.password}
            />
            <Input
              type="password"
              label="Confirme sua senha:"
              placeholder="****"
              id="confirmedPassword"
              register={register("repeatPassword")}
              errors={errors.errors.repeatPassword}
            />
            <Input
              type="text"
              label="Nickname:"
              placeholder="Informe um nickname"
              id="nickName"
              register={register("nickname")}
              errors={errors.errors.nickname}
            />
            <Input
              type="text"
              label="Foto de perfil:"
              placeholder="Escolha uma foto de perfil"
              id="avatar"
              register={register("background")}
              errors={errors.errors.background}
            />
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </div>
    </StyledMainRegister>
  );
};
export default RegisterPage;
