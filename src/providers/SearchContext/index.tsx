import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import { AnimesListContext } from "../AnimesListContext";
import { IAnimeList } from "../AnimesListContext/type";
import { LoadingContext } from "../LoadingContext";
import { IDefaultProviderProps, IUser } from "../UserContext/types";
import { ICustomList } from "./type";

interface ISearchContextProps {
  getFiltredAnimes: (nameAnime: string) => Promise<void>;
  getFiltredUsers: (nameAnime: string) => Promise<void>;
  getFiltredListsCustom: (nameList: string) => Promise<void>;
  animes: IAnimeList[] | undefined;
  profileUsers: IUser[] | undefined;
  filtredListsCustom: ICustomList[] | undefined;
}
export const SearchContext = createContext({} as ISearchContextProps);

export const SearchProvider = ({ children }: IDefaultProviderProps) => {
  const { setLoading } = useContext(LoadingContext);

  const [animes, setAnimes] = useState<IAnimeList[]>();
  const [profileUsers, setProfileUsers] = useState<IUser[]>();
  const [filtredListsCustom, setFiltredListsCustom] = useState<ICustomList[]>();

  const getFiltredAnimes = async (nameAnime: string) => {
    setLoading(true);
    try {
      const response = await api.get<IAnimeList[]>(`/animes?`, {
        params: {
          name_like: nameAnime,
        },
      });
      setAnimes(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const getFiltredListsCustom = async (nameList: string) => {
    setLoading(true);
    const token = localStorage.getItem("GeekAnimes:@token");
    try {
      const response = await api.get<ICustomList[]>(`/customlist?`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          name_like: nameList,
        },
      });
      setFiltredListsCustom(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const getFiltredUsers = async (nameAnime: string) => {
    setLoading(true);
    try {
      const response = await api.get<IUser[]>(`/users?`, {
        params: {
          name_like: nameAnime,
        },
      });
      setProfileUsers(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        animes,
        profileUsers,
        filtredListsCustom,
        getFiltredAnimes,
        getFiltredUsers,
        getFiltredListsCustom,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
