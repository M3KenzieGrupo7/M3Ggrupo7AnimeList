import { useContext } from "react";
import { FcFullTrash } from "react-icons/fc";
import { StyledFavoriteCard } from "./style";
import { IAnimeList } from "../../../providers/AnimesListContext/type";
import { AnimesListContext } from "../../../providers/AnimesListContext";
import { AnimeFavoriteContext } from "../../../providers/AnimesFavoritesContext";

interface IAnimeFavoriteProps {
  anime: IAnimeList;
}

const CardFavorite = ({ anime }: IAnimeFavoriteProps) => {
  const { removeAnimeToListFavorite } = useContext(AnimesListContext);

  const refreshFavorites = (id: number) => {
    removeAnimeToListFavorite(id);
  };

  return (
    <StyledFavoriteCard key={anime.id}>
      <figure>
        <img src={anime.urlImage} alt={anime.name} />
      </figure>
      <div className="content">
        <p>{anime.name}</p>
      </div>
      <button className="btnRemove" onClick={() => refreshFavorites(anime.id)}>
        Remover
      </button>
    </StyledFavoriteCard>
  );
};

export default CardFavorite;
