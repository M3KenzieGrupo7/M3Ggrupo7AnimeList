import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { IAnimeList, IAnimeListFavorite } from "../AnimesListContext/type";
import { IDefaultProviderProps, IIdUser } from "../UserContext/types";
import {
  IAnimeEdittFavorite,
  IFavoriteAnimes,
  IIdFavoritesAnime,
} from "./type";

interface IAnimeFavoriteContext {
  animeFavoriteEdit: (
    formData: IAnimeEdittFavorite,
    idAnime: number
  ) => Promise<void>;
  animeFavoriteDelete: (idAnime: number) => Promise<void>;
  animesFavoritesList: [] | IAnimeList[];
  animesFavoritesUser: () => Promise<void>;
}

export const AnimeFavoriteContext = createContext({} as IAnimeFavoriteContext);

export const AnimeFavoriteProvider = ({ children }: IDefaultProviderProps) => {
  const [idAnimesFavorites, setIdAnimesFavorites] = useState<IIdUser[]>([]);
  const [animesFavoritesList, setAnimesFavoritesList] = useState<
    IAnimeList[] | []
  >([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("GeekAnimes:@token");
  useEffect(()=> {
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
          setAnimesFavoritesList(response.data);
          localStorage.setItem(
            "GeekAnimes:@favoriteAnime",
            JSON.stringify(response.data)
          );
        } catch (error) {
          console.error(error);
        }
      }
    };
    animesFavoritesUser()
  }, [token])

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
        setAnimesFavoritesList(response.data);
        localStorage.setItem(
          "GeekAnimes:@favoriteAnime",
          JSON.stringify(response.data)
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const animeFavoriteEdit = async (
    formData: IAnimeEdittFavorite,
    idAnime: number
  ) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.patch<IAnimeList>(
          `/favorites/${idAnime}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //   navigate("/dashboard");
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

  return (
    <AnimeFavoriteContext.Provider
      value={{
        // animeFavoriteRegister,
        animeFavoriteEdit,
        animeFavoriteDelete,
        animesFavoritesList,
        animesFavoritesUser,
      }}
    >
      {children}
    </AnimeFavoriteContext.Provider>
  );
};
