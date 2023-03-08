import React from "react";
import { BiCategory } from "react-icons/bi";
import { StyledButton } from "./style";

const CategoryButton = () => {
  return (
    <StyledButton>
      <BiCategory /> Categorias
    </StyledButton>
  );
};

export default CategoryButton;
