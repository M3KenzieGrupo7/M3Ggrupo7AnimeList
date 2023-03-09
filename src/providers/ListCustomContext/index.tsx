import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../UserContext/types";
import { ICustomList, ICustomListEdit, IIdAnimeCustomList } from "./type";

interface ICustomListContext {
  listsCustom: ICustomList[];
  getListsCustom: (userID: number) => void;
  animesCustomList: () => Promise<void>;
  animeListCustomRegister: (formData: ICustomList) => Promise<void>;
  animeListCustomEdit: (
    formData: ICustomListEdit,
    idAnime: IIdAnimeCustomList
  ) => Promise<void>;
  animeFavoriteDelete: (idAnime: IIdAnimeCustomList) => Promise<void>;
}

export const CustomListContext = createContext({} as ICustomListContext);

export const CustomListProvider = ({ children }: IDefaultProviderProps) => {
  const [listsCustom, setListsCustom] = useState<ICustomList[]>([]);

  const getListsCustom = async (userID: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");

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
      } catch (error) {
        console.log(error);
      }
    }
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
        console.log("ANIMERES", response);
        setListsCustom(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const animeListCustomRegister = async (formData: ICustomList) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.post<ICustomList>(`/customlist`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //   navigate("/dashboard");
        setListsCustom([...listsCustom, response.data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const animeListCustomEdit = async (
    formData: ICustomListEdit,
    idAnime: IIdAnimeCustomList
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
        //   navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const animeFavoriteDelete = async (idAnime: IIdAnimeCustomList) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        await api.delete(`/customlist/${idAnime}`, {
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
    <CustomListContext.Provider
      value={{
        listsCustom,
        getListsCustom,
        animesCustomList,
        animeListCustomRegister,
        animeListCustomEdit,
        animeFavoriteDelete,
      }}
    >
      {children}
    </CustomListContext.Provider>
  );
};
