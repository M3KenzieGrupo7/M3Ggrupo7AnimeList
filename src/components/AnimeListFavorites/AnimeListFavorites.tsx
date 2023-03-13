import { useContext, useEffect } from "react";
import { AnimeFavoriteContext } from "../../providers/AnimesFavoritesContext";
import { AnimesListContext } from "../../providers/AnimesListContext";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import CardFavorite from "./CardFavorite/CardFavorite";
import { StyledContainerFavoriteList, StyledModalFavorite } from "./style";
import { api } from "../../services/api";
interface IPropsModal {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openFavorite: boolean;
}
const AnimeListFavorites = ({ openFavorite, setOpenModal }: IPropsModal) => {
  const { listAnimesFavorite, setListAnimesFavorite } =
    useContext(AnimesListContext);

  useEffect(() => {
    const animesFavoritesUser = async () => {
      const token = localStorage.getItem("GeekAnimes:@token");
      const idUser: number | null = JSON.parse(
        localStorage.getItem("GeekAnimes:@idUser") || "null"
      );
      if (token) {
        try {
          const response = await api.get<IAnimeList[]>(
            `/users/${idUser}/favorites`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setListAnimesFavorite(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    animesFavoritesUser();
  }, []);

  return (
    <StyledModalFavorite>
      <StyledContainerFavoriteList className="containerFavoriteList">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Fechar
        </button>
        <h3>Lista de Favoritos</h3>
        <ul>
          {listAnimesFavorite.map((anime) => (
            <CardFavorite key={anime.id} anime={anime} />
          ))}
        </ul>
      </StyledContainerFavoriteList>
    </StyledModalFavorite>
  );
};

export default AnimeListFavorites;
