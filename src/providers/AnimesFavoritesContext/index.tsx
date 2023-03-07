import { createContext, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps, IIdUser } from "../UserContext/types";
import { IFavoriteAnimes, IIdFavoritesAnime } from "./type";

interface IAnimeFavoriteContext {
  animeFavoriteRegister: (
    formData: IFavoriteAnimes,
    id: IIdUser
  ) => Promise<void>;
  animeFavoriteEdit: (
    formData: IFavoriteAnimes,
    idAnime: IIdFavoritesAnime
  ) => Promise<void>;
  animeFavoriteDelete: (idAnime: IIdFavoritesAnime) => Promise<void>;
}

export const AnimeFavoriteContext = createContext({} as IAnimeFavoriteContext);

export const AnimeFavoriteProvider = ({ children }: IDefaultProviderProps) => {
  const [idAnimesFavorites, setIdAnimesFavorites] = useState<IIdUser[]>([]);

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
    idAnime: IIdFavoritesAnime
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

  const animeFavoriteDelete = async (idAnime: IIdFavoritesAnime) => {
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
      }}
    >
      {children}
    </AnimeFavoriteContext.Provider>
  );
};
