import { useContext } from "react";
import { AnimesListContext } from "../../providers/AnimesListContext";
import CardFavorite from "./CardFavorite/CardFavorite";

import { StyledFavoriteList } from "./style";

const AnimeListFavorites = () => {
  const { listAnimesFavorite } = useContext(AnimesListContext);

  return (
    <StyledFavoriteList>
      <ul>
        {listAnimesFavorite.map((anime) => (
          <CardFavorite key={anime.id} anime={anime} />
        ))}
      </ul>
    </StyledFavoriteList>
  );
};

export default AnimeListFavorites;
