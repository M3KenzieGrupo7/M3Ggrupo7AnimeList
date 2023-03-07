import React, { useState } from "react";
import { StyledHeader } from "./style";
import logo from "../../assets/logo70x45.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader isOpen={isOpen}>
      <img src={logo} alt="" />
    </StyledHeader>
  );
};

export default Header;
