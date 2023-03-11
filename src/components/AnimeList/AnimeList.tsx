import { useContext } from "react";
import { AnimesListContext } from "../../providers/AnimesListContext";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import ModalEditAnimes from "../ModalListAnimes";
import AnimeCard from "./AnimeCard/AnimeCard";
import { StyledAnimeList } from "./style";

const AnimeList = () => {
  const { animes, addAnimeToListFavorite } = useContext(AnimesListContext);

  return (
    <StyledAnimeList>
      <ModalEditAnimes />
      {animes.map((anime: IAnimeList) => (
        <AnimeCard
          key={anime.id}
          anime={anime}
          addAnimeToListFavorite={addAnimeToListFavorite}
        />
      ))}
    </StyledAnimeList>
  );
};

export default AnimeList;
