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
  const { animeFavoriteDelete, animesFavoritesUser } = useContext(AnimeFavoriteContext);

  const refreshFavorites = (id: number) => {
    animeFavoriteDelete(id)
    animesFavoritesUser()
  }

  return (
    <StyledFavoriteCard key={anime.id}>
      <figure>
        <img src={anime.urlImage} alt={anime.name} />
      </figure>
      <div className="content">
        <p>{anime.name}</p>
      </div>
      <FcFullTrash
        className="btnRemove"
        onClick={() => refreshFavorites(anime.id)}
      ></FcFullTrash>
    </StyledFavoriteCard>
  );
};

export default CardFavorite;
