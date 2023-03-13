import { TextFieldProps } from "@mui/material";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

import { StyledButton } from "./style";

type IMenuButtonProps = {
  changeValueButton: () => void;
  isOpen: true | false;
} & TextFieldProps;

const MenuButton = ({ changeValueButton, isOpen }: IMenuButtonProps) => {
  return (
    <StyledButton onClick={changeValueButton}>
      {isOpen ? <CgCloseO color="#fff" /> : <HiMenuAlt3 color="#fff" />}
    </StyledButton>
  );
};

export default MenuButton;
