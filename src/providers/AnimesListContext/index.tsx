import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { AnimeFavoriteContext } from "../AnimesFavoritesContext";
import { LoadingContext } from "../LoadingContext";
import { IDefaultProviderProps } from "../UserContext/types";
import { IAnimeList, IAnimeListFavorite } from "./type";
import { v4 as Uuid } from "uuid";
import { number } from "yup";
interface IAnimesContext {
  animes: IAnimeList[];
  listAnimesFavorite: IAnimeListFavorite[];
  setListAnimesFavorite: React.Dispatch<React.SetStateAction<IAnimeList[]>>;
  addAnimeToListFavorite: (animeToAdd: IAnimeList, id: number) => void;
  removeAnimeToListFavorite: (animeId: number) => void;
  listAnimesRegister: (formData: IAnimeList) => Promise<void>;
  searchAnimeList: (name: string) => Promise<void>;
  animeFound: IAnimeList | null;
}

export const AnimesListContext = createContext({} as IAnimesContext);

export const AnimesListProvider = ({ children }: IDefaultProviderProps) => {
  const { setLoading } = useContext(LoadingContext);
  const [animes, setAnimes] = useState<IAnimeList[]>([]);
  const [animeFound, setAnimeFound] = useState<IAnimeList | null>(null);
  const [listAnimesFavorite, setListAnimesFavorite] = useState<IAnimeList[]>(
    []
  );
  const navigate = useNavigate();
  useEffect(() => {
    const listAnimes = async () => {
      try {
        const response = await api.get<IAnimeList[]>(`/animes`);
        setAnimes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    listAnimes();
  }, []);

  const searchAnimeList = async (nameAnime: string) => {
    try {
      const response = await api.get<IAnimeList>(`/animes?`, {
        params: {
          name_like: nameAnime,
        },
      });
      setAnimeFound(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const listAnimesRegister = async (formData: IAnimeList) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.post<IAnimeList>(`/animes`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const animeFavoriteRegister = async (
    formData: Omit<IAnimeList, "id">,
    animeId: number
  ) => {
    const token = localStorage.getItem("GeekAnimes:@token");

    if (token) {
      try {
        const response = await api.post<IAnimeList>(
          `/users/${animeId}/favorites`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const animeFavoriteDelete = async (idAnime: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    const animesFav: IAnimeList[] = JSON.parse(
      localStorage.getItem("GeekAnimes:@favoriteAnime") || "null"
    );

    if (token) {
      try {
        await api.delete(`/favorites/${idAnime}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const newFav = animesFav.filter((anime) => anime.id !== idAnime);
        localStorage.setItem(
          "GeekAnimes:@favoriteAnime",
          JSON.stringify(newFav)
        );
        //   navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const addAnimeToListFavorite = (animeToAdd: IAnimeList, id: number) => {
    setLoading(true);
    if (listAnimesFavorite?.includes(animeToAdd)) {
      toast.warn("Este anime já foi adicionado à lista de favoritos");
      setLoading(false);
    } else {
      toast.success("Anime adicionado à lista de favoritos");
      setListAnimesFavorite([...listAnimesFavorite, animeToAdd]);
      animeFavoriteRegister(animeToAdd, id);
      setLoading(false);
    }
  };

  const removeAnimeToListFavorite = (animeId: number) => {
    const productRemove = listAnimesFavorite.filter(
      (animeToRemove) => animeToRemove.id !== animeId
    );
    animeFavoriteDelete(animeId);
    toast.success("Anime removido da lista de favoritos");
    setListAnimesFavorite(productRemove);
  };

  return (
    <AnimesListContext.Provider
      value={{
        animes,
        listAnimesFavorite,
        setListAnimesFavorite,
        addAnimeToListFavorite,
        removeAnimeToListFavorite,
        listAnimesRegister,
        searchAnimeList,
        animeFound,
      }}
    >
      {children}
    </AnimesListContext.Provider>
  );
};
