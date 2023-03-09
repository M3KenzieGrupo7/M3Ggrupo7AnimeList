import React from "react";
import { StyledLink } from "./style";
import { BiHome } from "react-icons/bi";

const HomeButton = () => {
  return (
    <StyledLink to="/dashboard">
      <BiHome /> Home
    </StyledLink>
  );
};

export default HomeButton;
