import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../UserContext/types";
import { IAnimeList, IAnimeListFavorite } from "./type";

interface IAnimesContext {
  animes: IAnimeList[];
  listAnimesFavorite: IAnimeListFavorite[];
  setListAnimesFavorite: React.Dispatch<React.SetStateAction<IAnimeList[]>>;
  addAnimeToListFavorite: (animeToAdd: IAnimeList) => void;
  removeAnimeToListFavorite: (animeId: number) => void;
  listAnimesRegister: (formData: IAnimeList) => Promise<void>;
  searchAnimeList: (name: string) => Promise<void>;
  animeFound: IAnimeList | null;
}

export const AnimesListContext = createContext({} as IAnimesContext);

export const AnimesListProvider = ({ children }: IDefaultProviderProps) => {
  const [animes, setAnimes] = useState<IAnimeList[]>([]);
  const [animeFound, setAnimeFound] = useState<IAnimeList | null>(null);

  const [listAnimesFavorite, setListAnimesFavorite] = useState<IAnimeList[]>(
    []
  );
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
        //   navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const addAnimeToListFavorite = (animeToAdd: IAnimeList) => {
    if (listAnimesFavorite.includes(animeToAdd)) {
      toast.warn("Este anime já foi adicionado à lista de favoritos");
    } else {
      toast.success("Anime adicionado à lista de favoritos");
      setListAnimesFavorite([...listAnimesFavorite, animeToAdd]);
    }
  };

  const removeAnimeToListFavorite = (animeId: number) => {
    const productRemove = listAnimesFavorite.filter(
      (animeToRemove) => animeToRemove.id !== animeId
    );
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
