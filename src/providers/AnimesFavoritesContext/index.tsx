import { createContext, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps, IIdUser } from "../UserContext/types";
import { IFavoriteAnimes, IIdFavoritesAnime } from "./type";

interface IAnimeFavoriteContext {
  animeFavoriteRegister: (
    formData: IFavoriteAnimes,
    id: IIdUser
  ) => Promise<void>;
  animeFavoriteEdit: (formData: IFavoriteAnimes, idAnime: number) => Promise<void>;
  animeFavoriteDelete: (idAnime: number) => Promise<void>;
  animesFavoritesUser: (id: IIdUser) => Promise<void>;
}

export const AnimeFavoriteContext = createContext({} as IAnimeFavoriteContext);

export const AnimeFavoriteProvider = ({ children }: IDefaultProviderProps) => {
  const [idAnimesFavorites, setIdAnimesFavorites] = useState<IIdUser[]>([]);

  const animesFavoritesUser = async () => {
    const token = localStorage.getItem("GeekAnimes:@token");
    const idUser: number | null = JSON.parse(localStorage.getItem('GeekAnimes:@idUser') || "null");
    if (token) {
      try {
        const response = await api.get<IFavoriteAnimes[]>(
          `/users/${idUser}/favorites`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        localStorage.setItem(
          "GeekAnimes:@favorites",
          JSON.stringify(response.data)
        );
        //   navigate("/dashboard");
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }
  };

  const data = {
    "animesIds": [80, 90, 100],
    "userId": 1
  }

  const animeFavoriteRegister = async (formData: IFavoriteAnimes) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.post<IFavoriteAnimes>(
          `/favorites`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //   navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };


  const animeFavoriteEdit = async (
    formData: IFavoriteAnimes,
    idAnime: number
  ) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.patch<IFavoriteAnimes>(
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
        console.log(error);
      }
    }
  };


  const animeFavoriteDelete = async (idAnime: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        await api.delete(`/favorites/${idAnime}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //   navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AnimeFavoriteContext.Provider
      value={{
        animeFavoriteRegister,
        animeFavoriteEdit,
        animeFavoriteDelete,
        animesFavoritesUser,
      }}
    >
      {children}
    </AnimeFavoriteContext.Provider>
  );
};
