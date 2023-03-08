import React, { useContext, useEffect, useState } from "react";
import { HeaderDropBox, StyledHeader } from "./style";
import logo from "../../assets/logo70x45.svg";
import InputHeader from "../InputHeader/InputHeader";
import MenuButton from "../MenuButton/MenuButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import HomeButton from "../HomeButton/HomeButton";
import CategoryButton from "../CategoryButton/CategoryButton";
import HeaderProfileLink from "../HeaderProfileLink/HeaderProfileLink";
import { UserContext } from "../../providers/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <StyledHeader>
      <img src={logo} alt="" />
      <InputHeader
        id="searchBarHeader"
        placeholder="Pesquisar por Anime ou perfil"
        type="number"
      />
      <MenuButton
        changeValueButton={changeIsOpen}
        isOpen={isOpen}
        className="DropButton"
      />
      <HeaderDropBox isOpen={isOpen}>
        <HeaderProfileLink
          nickname={user?.nickname || ""}
          avatar={user?.background || ""}
        />
        <div>
          <HomeButton />
          <CategoryButton />
        </div>
        <LogoutButton />
      </HeaderDropBox>
    </StyledHeader>
  );
};

export default Header;
