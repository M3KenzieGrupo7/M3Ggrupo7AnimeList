import { FaHeart } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import { StyledAnimeCard } from "./style";
import { IAnimeList } from "../../../providers/AnimesListContext/type";
import { CustomListContext } from "../../../providers/ListCustom";
import { useContext } from "react";

interface IAnimeProps {
  anime: IAnimeList;
  addAnimeToListFavorite: (animeToAdd: IAnimeList) => void;
}

const AnimeCard = ({ anime, addAnimeToListFavorite }: IAnimeProps) => {
  const { setOpen } = useContext(CustomListContext);
  return (
    <StyledAnimeCard>
      <figure>
        <img src={anime.urlImage} alt={anime.name} />
      </figure>
      <div className="content">
        <p>{anime.synopsis}</p>
      </div>
      <div className="containerBtns">
        <MdPlaylistAdd
          className="btnAddList"
          id={String(anime.id)}
          onClick={() => setOpen("block")}
        ></MdPlaylistAdd>
        <FaHeart
          className="btnFavorite"
          onClick={() => addAnimeToListFavorite(anime)}
        ></FaHeart>
      </div>
    </StyledAnimeCard>
  );
};

export default AnimeCard;
