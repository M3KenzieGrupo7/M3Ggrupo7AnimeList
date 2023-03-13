import { useContext, useState } from "react";
import { AnimesListContext } from "../../providers/AnimesListContext";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import ModalEditAnimes from "../ModalListAnimes";
import AnimeCard from "./AnimeCard/AnimeCard";
import { StyledContainerAnimeList } from "./style";

const AnimeList = () => {
  const { animes, addAnimeToListFavorite } = useContext(AnimesListContext);
  const [animeSelectedID, setAnimeSelectedID] = useState(0);

  return (
    <StyledContainerAnimeList>
      <h3>Lista de animes</h3>
      <div>
        {animes.map((anime: IAnimeList) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            setAnimeSelectedID={setAnimeSelectedID}
            addAnimeToListFavorite={addAnimeToListFavorite}
          />
        ))}
      </div>
    </StyledContainerAnimeList>
  );
};

export default AnimeList;
