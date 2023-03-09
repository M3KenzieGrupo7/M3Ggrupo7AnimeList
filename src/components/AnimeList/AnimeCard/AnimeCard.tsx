import { FaHeart } from "react-icons/fa";
import { StyledAnimeCard } from "./style";
import { IAnimeList } from "../../../providers/AnimesListContext/type";

interface IAnimeProps {
  anime: IAnimeList;
  addAnimeToListFavorite: (animeToAdd: IAnimeList) => void;
}

const AnimeCard = ({ anime, addAnimeToListFavorite }: IAnimeProps) => (
  <StyledAnimeCard>
    <figure>
      <img src={anime.urlImage} alt={anime.name} />
    </figure>
    <div className="content">
      <p>{anime.synopsis}</p>
    </div>
    <button>Adicionar</button>
    <FaHeart onClick={() => addAnimeToListFavorite(anime)}></FaHeart>
  </StyledAnimeCard>
);

export default AnimeCard;
