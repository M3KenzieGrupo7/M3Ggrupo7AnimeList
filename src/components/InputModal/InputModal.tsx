import { TextFieldProps } from "@mui/material";
import React from "react";
import { StyledInput } from "./style";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  width: string;
}

const InputModal = ({
  id,
  placeholder,
  register,
  type,
  width,
}: IInputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      id={id}
      {...register}
      width={width}
    />
  );
};

export default InputModal;
