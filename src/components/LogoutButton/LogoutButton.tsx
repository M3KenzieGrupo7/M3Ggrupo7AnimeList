import React, { useContext } from "react";
import { StyledButton } from "./style";
import { MdLogout } from "react-icons/md";
import { UserContext } from "../../providers/UserContext";

const LogoutButton = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <StyledButton
      onClick={() => {
        userLogout();
      }}
      <MdLogout /> Sair
    </StyledButton>
  );
};

export default LogoutButton;
