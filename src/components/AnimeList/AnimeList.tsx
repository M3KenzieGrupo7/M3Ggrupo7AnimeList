import { useContext } from "react";
import { AnimesListContext } from "../../providers/AnimesListContext";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import ModalEditAnimes from "../ModalListAnimes";
import AnimeCard from "./AnimeCard/AnimeCard";
import { StyledContainerAnimeList } from "./style";

const AnimeList = () => {
  const { animes, addAnimeToListFavorite } = useContext(AnimesListContext);

  return (
    <StyledContainerAnimeList className="containerAnimeList">
      <h3>Lista de Animes</h3>
      <ul>
        <ModalEditAnimes />
        {animes.map((anime: IAnimeList) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            addAnimeToListFavorite={addAnimeToListFavorite}
          />
        ))}
      </ul>
    </StyledContainerAnimeList>
  );
};

export default AnimeList;
