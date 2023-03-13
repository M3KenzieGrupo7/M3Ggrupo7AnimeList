import { useContext } from "react";
import { AnimeFavoriteContext } from "../../providers/AnimesFavoritesContext";
import { AnimesListContext } from "../../providers/AnimesListContext";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import CardFavorite from "./CardFavorite/CardFavorite";
import { StyledContainerFavoriteList } from "./style";

const AnimeListFavorites = () => {
  const { listAnimesFavorite } = useContext(AnimesListContext);
  const { animesFavoritesList } = useContext(AnimeFavoriteContext);
  const animesFav: IAnimeList[] = JSON.parse(
    localStorage.getItem("GeekAnimes:@favoriteAnime") || "null"
  );
  console.log(animesFavoritesList);

  return (
    <StyledContainerFavoriteList className="containerFavoriteList">
      <h3>Lista de Favoritos</h3>
      <ul>
        {animesFav &&
          animesFav.map((anime) => (
            <CardFavorite key={anime.id} anime={anime} />
          ))}
      </ul>
    </StyledContainerFavoriteList>
  );
};

export default AnimeListFavorites;
