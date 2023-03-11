import { FaHeart } from "react-icons/fa";
import { StyledAnimeCard } from "./style";
import { IAnimeList } from "../../../providers/AnimesListContext/type";
import { CustomListContext } from "../../../providers/ListCustom";
import { useContext } from "react";

interface IAnimeProps {
  anime: IAnimeList;
  addAnimeToListFavorite: (animeToAdd: IAnimeList) => void;
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
    setOpen("block");
    getSpecificListsCustom(id);
  };

  return (
    <StyledAnimeCard>
      <figure>
        <img src={anime.urlImage} alt={anime.name} />
      </figure>
      <div className="content">
        <p>{anime.synopsis}</p>
      </div>
      <button
        id={String(anime.id)}
        onClick={() => {
          setAnimeSelectedID(anime.id);
          openModalEdit(userID);
        }}
      >
        Adicionar
      </button>
      <FaHeart onClick={() => addAnimeToListFavorite(anime)}></FaHeart>
    </StyledAnimeCard>
  );
};

export default AnimeCard;
