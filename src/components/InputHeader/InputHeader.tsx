import { TextFieldProps } from "@mui/material";
import React from "react";
import { StyledInput } from "./style";

type IInputProps = {
  label: string;
  id: string;
  errorMessage?: string;
} & TextFieldProps;

const InputHeader = ({}) => {
  return <StyledInput></StyledInput>;
};

export default InputHeader;
