import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../UserContext/types";
import { IAnimeList } from "./type";

interface IAnimesContext {
  animes: IAnimeList[];
  listAnimesRegister: (formData: IAnimeList) => Promise<void>;
  searchAnimeList: (name: string) => Promise<void>;
  animeFound: IAnimeList | null;
}

export const AnimesListContext = createContext({} as IAnimesContext);

export const AnimesListProvider = ({ children }: IDefaultProviderProps) => {
  const [animes, setAnimes] = useState<IAnimeList[]>([]);
  const [animeFound, setAnimeFound] = useState<IAnimeList | null>(null);

  useEffect(() => {
    const listAnimes = async () => {
      try { 
        const response = await api.get<IAnimeList[]>(`/animes`);
        setAnimes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    listAnimes()
  }, [])
  
  const searchAnimeList = async (nameAnime: string) => {
    try {
      const response = await api.get<IAnimeList>(`/animes?`, {
        params: {
          name_like: nameAnime,
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
