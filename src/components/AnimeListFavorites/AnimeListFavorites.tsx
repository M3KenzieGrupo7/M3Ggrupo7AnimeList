import { useContext } from "react";
import { AnimesListContext } from "../../providers/AnimesListContext";
import CardFavorite from "./CardFavorite/CardFavorite";
import { StyledContainerFavoriteList } from "./style";

const AnimeListFavorites = () => {
  const { listAnimesFavorite } = useContext(AnimesListContext);

  return (
    <StyledContainerFavoriteList className="containerFavoriteList">
      <h3>Lista de Favoritos</h3>
      <ul>
        {listAnimesFavorite.map((anime) => (
          <CardFavorite key={anime.id} anime={anime} />
        ))}
      </ul>
    </StyledContainerFavoriteList>
  );
};

export default AnimeListFavorites;
