import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledDivInput } from "./style";
interface IInputProps{
    id: string;
    label:string;
    placeholder: string;
    type: string;
    register: UseFormRegisterReturn;
    errors?: FieldError;
 
    


}

const Input = ({id,label,placeholder, type, errors, register}:IInputProps)=>{
    return(
        <StyledDivInput>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} {...register}/>
            
           {errors ?  <p>{errors.message}</p> : undefined}
        </StyledDivInput>
    )
}
export default Input