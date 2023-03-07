import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { StyledMainLogin } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

interface iLogin{
    email:string;
    password:string;
    message?:string
   
}

const LoginPage = () => {
  const { register, handleSubmit, reset, formState: errors } = useForm<iLogin>({resolver:yupResolver(schema)});
  const{loginUser} = useContext(UserContext)
  const navigate = useNavigate();
  const submit: SubmitHandler<iLogin> = (formData) => {
    loginUser(formData)
   
    reset
  };
  return (
    <StyledMainLogin>
      <div className="container-infos">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            id="email-input"
            label="E-mail:"
            placeholder="Digite seu e-mail"
            type="email"
            register={register('email')}
            errors={errors.errors.email}
          />
          <Input
            id="password-login"
            label="Senha:"
            placeholder="******"
            type="password"
            register={register('password')}
            errors={errors.errors.password}
          />
          <button type="submit">Confirmar</button>
        </form>
        <div className="register-box">
          <p>Ainda não possui cadastro?</p>
          <button onClick={() => navigate("/register")}>Cadastre-se</button>
        </div>
      </div>
    </StyledMainLogin>
  );
};

export default LoginPage;
