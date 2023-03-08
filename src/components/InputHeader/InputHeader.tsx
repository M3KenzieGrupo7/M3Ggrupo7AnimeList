import { TextFieldProps } from "@mui/material";
import React from "react";
import { StyledInput } from "./style";

type IInputProps = {
  id: string;
} & TextFieldProps;

const InputHeader = ({ id, label, placeholder }: IInputProps) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

export default InputHeader;
