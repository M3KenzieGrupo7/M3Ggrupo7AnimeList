import React, { useContext, useEffect, useState } from "react";
import { HeaderDropBox, StyledBackHeader, StyledHeader } from "./style";
import logo from "../../assets/logo70x45.svg";
import InputHeader from "../InputHeader/InputHeader";
import MenuButton from "../MenuButton/MenuButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import HomeButton from "../HomeButton/HomeButton";
import CategoryButton from "../CategoryButton/CategoryButton";
import HeaderProfileLink from "../HeaderProfileLink/HeaderProfileLink";
import { UserContext } from "../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  interface Iregister {
    name: string;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: errors,
  } = useForm<Iregister>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<Iregister> = (formData) => {
    const userID = localStorage.getItem("GeekAnimes:@idUser");
    const exec = async () => {};
    exec();
    reset();
  };

  const { user } = useContext(UserContext);

  return (
    <StyledBackHeader>
      <StyledHeader>
        <img src={logo} alt="" />
        <InputHeader
          register={register("name")}
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
    </StyledBackHeader>
  );
};

export default Header;
