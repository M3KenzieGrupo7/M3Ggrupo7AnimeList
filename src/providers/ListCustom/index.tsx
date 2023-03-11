import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IAnimeList } from "../AnimesListContext/type";
import { LoadingContext } from "../LoadingContext";
import { IDefaultProviderProps } from "../UserContext/types";
import {
  ICustomList,
  ICustomListEdit,
  ICustomListRegister,
  IIdAnimeCustomList,
} from "./type";

interface ICustomListContext {
  listsCustom: ICustomList[];
  getSpecificListsCustom: (userID: number) => void;
  animesCustomList: () => Promise<void>;
  animeListCustomRegister: (formData: ICustomListRegister) => Promise<boolean>;
  removeAnimeInCustomList: (
    id: number,
    newlist: ICustomListEdit
  ) => Promise<void>;
  animeListCustomEdit: (
    formData: ICustomListEdit,
    idAnime: number
  ) => Promise<void>;
  customListDelete: (idList: number) => Promise<void>;
  getSpecificsAnimes: (listID: number[]) => Promise<IAnimeList[]>;
}

export const CustomListContext = createContext({} as ICustomListContext);

export const CustomListProvider = ({ children }: IDefaultProviderProps) => {
  const [listsCustom, setListsCustom] = useState<ICustomList[]>([]);

  const { setLoading } = useContext(LoadingContext);
  const getSpecificListsCustom = async (userID: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    setLoading(true);

    if (token) {
      try {
        const response = await api.get<ICustomList[]>(
          `/customlist?userId=${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setListsCustom(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const getSpecificsAnimes = async (listID: number[]) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    setLoading(true);

    let filter = "";

    listID.forEach((id) => {
      filter += `&id=${id}`;
    });

    if (token) {
      try {
        const response = await api.get<IAnimeList[]>(`/animes?${filter}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        return response.data;
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    setLoading(false);
    return [];
  };

  const animesCustomList = async () => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.get<ICustomList[]>(`/customlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setListsCustom(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    animesCustomList();
  };

  const animeListCustomRegister = async (formData: ICustomListRegister) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.post<ICustomList>(`/customlist`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setListsCustom([...listsCustom, response.data]);
        toast.success("Lista Cadastrada com Sucesso!");
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
    return false;
  };

  const animeListCustomEdit = async (
    formData: ICustomListEdit,
    idAnime: number
  ) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.patch<ICustomList>(
          `/customlist/${idAnime}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const customListDelete = async (idList: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        await api.delete(`/customlist/${idList}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Lista Deletada com Sucesso!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeAnimeInCustomList = async (
    id: number,
    newlist: ICustomListEdit
  ) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.patch<ICustomList>(
          `/customlist/${id}`,
          newlist,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <CustomListContext.Provider
      value={{
        listsCustom,
        getSpecificListsCustom,
        animesCustomList,
        animeListCustomRegister,
        animeListCustomEdit,
        customListDelete,
        getSpecificsAnimes,
        removeAnimeInCustomList,
      }}
    >
      {children}
    </CustomListContext.Provider>
  );
};
