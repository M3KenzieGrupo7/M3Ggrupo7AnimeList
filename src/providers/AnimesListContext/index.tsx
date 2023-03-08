import { createContext, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../UserContext/types";
import { IAnimeList } from "./type";

interface IAnimesContext {
  listAnimes: () => Promise<void>;
  animes: IAnimeList[] | null;
  listAnimesRegister: (formData: IAnimeList) => Promise<void>;
  searchAnimeList: (name: string) => Promise<void>;
  animeFound: IAnimeList | null;
}

export const AnimesListContext = createContext({} as IAnimesContext);

export const AnimesListProvider = ({ children }: IDefaultProviderProps) => {
  const [animes, setAnimes] = useState<IAnimeList[] | null>(null);
  const [animeFound, setAnimeFound] = useState<IAnimeList | null>(null);

  const listAnimes = async () => {
    try {
      const response = await api.get<IAnimeList[]>(`/animes`);
      setAnimes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchAnimeList = async (nameAnime: string) => {
    try {
      const response = await api.get<IAnimeList>(`/animes?`, {
        params: {
          name: nameAnime,
        },
      });
      setAnimeFound(response.data);
    } catch (error) {
      console.log(error);
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
        //   navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AnimesListContext.Provider
      value={{
        listAnimes,
        animes,
        listAnimesRegister,
        searchAnimeList,
        animeFound,
      }}
    >
      {children}
    </AnimesListContext.Provider>
  );
};
