import { useContext } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { StyledFavoriteCard } from "./style";
import { IAnimeListFavorite } from "../../../providers/AnimesListContext/type";
import { AnimesListContext } from "../../../providers/AnimesListContext";

interface IAnimeFavoriteProps {
  anime: IAnimeListFavorite;
}

const CardFavorite = ({ anime }: IAnimeFavoriteProps) => {
  const {
    listAnimesFavorite,
    setListAnimesFavorite,
    removeAnimeToListFavorite,
  } = useContext(AnimesListContext);
  return (
    <StyledFavoriteCard key={anime.id}>
      <figure>
        <img src={anime.urlImage} alt={anime.name} />
      </figure>
      <div className="content">
        <p>{anime.name}</p>
      </div>
      <IoMdRemoveCircle
        onClick={() => removeAnimeToListFavorite(anime.id)}
      ></IoMdRemoveCircle>
    </StyledFavoriteCard>
  );
};

export default CardFavorite;
