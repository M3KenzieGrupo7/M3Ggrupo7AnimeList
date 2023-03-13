import React from "react";
import { BiCategory } from "react-icons/bi";
import { StyledButton } from "./style";
interface IPropsCategory {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openFavorite: boolean;
}
const FavoryButton = ({ setOpenModal, openFavorite }: IPropsCategory) => {
  return (
    <StyledButton
      onClick={() => {
        setOpenModal(!openFavorite);
      }}
    >
      <BiCategory /> Favoritos
    </StyledButton>
  );
};

export default FavoryButton;
