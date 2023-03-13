import React, { useContext, useEffect, useState } from "react";
import {
  HeaderDropBox,
  StyledBackHeader,
  StyledHeader,
  StyledSearchButton,
} from "./style";
import logo from "../../assets/logo80x45.png";
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
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../providers/SearchContext";
import { FiSearch } from "react-icons/fi";
import AnimeListFavorites from "../AnimeListFavorites/AnimeListFavorites";

const Header = () => {
  const {
    animes,
    getFiltredAnimes,
    getFiltredUsers,
    filtredListsCustom,
    getFiltredListsCustom,
    profileUsers,
  } = useContext(SearchContext);

  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  interface Iregister {
    name: string;
  }

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: errors,
  } = useForm<Iregister>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<Iregister> = (formData) => {
    const exec = async () => {
      getFiltredAnimes(formData.name);
      getFiltredUsers(formData.name);
      getFiltredListsCustom(formData.name);
      navigate(`/search/${formData.name}`);
    };
    exec();
    reset();
  };

  const { user } = useContext(UserContext);
  const [openFavorite, setOpenFavorite] = useState(false);

  return (
    <>
      <StyledBackHeader>
        <StyledHeader>
          <img src={logo} alt="" />
          <form onSubmit={handleSubmit(submit)}>
            <InputHeader
              register={register("name")}
              id="searchBarHeader"
              placeholder="Pesquisar por Anime ou perfil"
              type="text"
            />
            <StyledSearchButton type="submit">
              <FiSearch />
            </StyledSearchButton>
          </form>

          <MenuButton
            changeValueButton={changeIsOpen}
            isOpen={isOpen}
            className="DropButton"
          />
          <HeaderDropBox isOpen={isOpen}>
            <div>
              <HomeButton />
              <CategoryButton
                setOpenModal={setOpenFavorite}
                openFavorite={openFavorite}
              />
            </div>
            <HeaderProfileLink
              nickname={user?.nickname || ""}
              avatar={user?.background || ""}
            />
            <LogoutButton />
          </HeaderDropBox>
        </StyledHeader>
      </StyledBackHeader>
      {openFavorite ? (
        <AnimeListFavorites
          setOpenModal={setOpenFavorite}
          openFavorite={openFavorite}
        />
      ) : null}
    </>
  );
};

export default Header;
