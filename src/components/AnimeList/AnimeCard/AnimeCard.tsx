import { FaHeart } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import { StyledAnimeCard } from "./style";
import { IAnimeList } from "../../../providers/AnimesListContext/type";
import { CustomListContext } from "../../../providers/ListCustom";
import { useContext } from "react";
import { AnimeFavoriteContext } from "../../../providers/AnimesFavoritesContext";

interface IAnimeProps {
  anime: IAnimeList;
  addAnimeToListFavorite: (animeToAdd: IAnimeList, id: number) => void;
  setAnimeSelectedID: React.Dispatch<React.SetStateAction<number>>;
}

interface IUserID {
  name: string;
  userId?: number;
}

const AnimeCard = ({
  anime,
  addAnimeToListFavorite,
  setAnimeSelectedID,
}: IAnimeProps) => {
  const { setOpen, getSpecificListsCustom } = useContext(CustomListContext);
  const userID = Number(localStorage.getItem("GeekAnimes:@idUser"));

  const openModalEdit = (id: number) => {
    setOpen("flex");
    getSpecificListsCustom(id);
  };

  const { animesFavoritesUser } = useContext(AnimeFavoriteContext);

  const refreshFavorites = (anime: IAnimeList) => {
    addAnimeToListFavorite(anime, userID);
    animesFavoritesUser()
  }

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
          onClick={() => {
            setOpen("flex");
            setAnimeSelectedID(anime.id);
          }}
        ></MdPlaylistAdd>
        <FaHeart
          className="btnFavorite"
          onClick={() => refreshFavorites(anime)}
        ></FaHeart>
      </div>
    </StyledAnimeCard>
  );
};

export default AnimeCard;
