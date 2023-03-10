import { TextFieldProps } from "@mui/material";
import React from "react";
import { StyledInput } from "./style";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  id: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}

const InputHeader = ({ id, placeholder, register, type }: IInputProps) => {
  return (
    <StyledInput type={type} placeholder={placeholder} id={id} {...register} />
  );
};

export default InputHeader;
