import React from "react";
import { StyledButton } from "./style";
import { MdLogout } from "react-icons/md";

const LogoutButton = () => {
  return (
    <StyledButton>
      <MdLogout /> Sair
    </StyledButton>
  );
};

export default LogoutButton;
