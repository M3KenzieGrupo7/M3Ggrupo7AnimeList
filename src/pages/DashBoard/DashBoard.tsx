import { useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";
import AnimeListFavorites from "../../components/AnimeListFavorites/AnimeListFavorites";
import Header from "../../components/Header/Header";
import ModalEditAnimes from "../../components/ModalListAnimes";
import { StyledMain } from "./style";

const DashBoard = () => {
  const [animeSelectedID, setAnimeSelectedID] = useState(0);
  return (
    <>
      <Header></Header>
      <StyledMain>
        <AnimeList></AnimeList>
        <AnimeListFavorites></AnimeListFavorites>
        <ModalEditAnimes animeid={animeSelectedID} />
      </StyledMain>
    </>
  );
};

export default DashBoard;
