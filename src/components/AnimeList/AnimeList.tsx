import { useContext, useState } from "react";
import { AnimesListContext } from "../../providers/AnimesListContext";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import ModalEditAnimes from "../ModalListAnimes";
import AnimeCard from "./AnimeCard/AnimeCard";
import { StyledContainerAnimeList } from "./style";

interface IAnimeProps {
  setAnimeSelectedID: React.Dispatch<React.SetStateAction<number>>;
}
const AnimeList = ({ setAnimeSelectedID }: IAnimeProps) => {
  const { animes, addAnimeToListFavorite } = useContext(AnimesListContext);

  return (
    <StyledContainerAnimeList>
      <h3>Lista de animes</h3>
      <ul>
        {animes.map((anime: IAnimeList) => (
          <li>
            <AnimeCard
              key={anime.id}
              anime={anime}
              setAnimeSelectedID={setAnimeSelectedID}
              addAnimeToListFavorite={addAnimeToListFavorite}
            />
          </li>
        ))}
      </ul>
    </StyledContainerAnimeList>
  );
};

export default AnimeList;
