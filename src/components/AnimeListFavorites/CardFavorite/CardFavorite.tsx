import { useContext } from "react";
import { FcFullTrash } from "react-icons/fc";
import { StyledFavoriteCard } from "./style";
import { IAnimeListFavorite } from "../../../providers/AnimesListContext/type";
import { AnimesListContext } from "../../../providers/AnimesListContext";

interface IAnimeFavoriteProps {
  anime: IAnimeListFavorite;
}

const CardFavorite = ({ anime }: IAnimeFavoriteProps) => {
  const { removeAnimeToListFavorite } = useContext(AnimesListContext);
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
        onClick={() => removeAnimeToListFavorite(anime.id)}
      ></FcFullTrash>
    </StyledFavoriteCard>
  );
};

export default CardFavorite;
