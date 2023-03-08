import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledForm } from "./style";


interface iLogin{
    email:string;
    password:string;
    message?:string
   
}

export const FormLogin = ()=>{


    const{register, handleSubmit, reset, formState:errors}= useForm<iLogin>({resolver:yupResolver(schema)})
    const{loginUser}=useContext(UserContext)
    const submit: SubmitHandler<iLogin> = (formData)=>{
        loginUser(formData)
        reset()
    }


    return(
       
            <StyledForm onSubmit={handleSubmit(submit)}>
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
            </StyledForm>
      
    )

}
export default FormLogin