import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../UserContext/types";
import { ICustomList, ICustomListEdit, IIdAnimeCustomList } from "./type";

interface ICustomListContext {
  listCustom: ICustomList[];
  animeListCustomRegister: (formData: ICustomList) => Promise<void>;
  animeListCustomEdit: (
    formData: ICustomListEdit,
    idAnime: number
  ) => Promise<void>;
  animeFavoriteDelete: (idAnime: number) => Promise<void>;
}

export const CustomListContext = createContext({} as ICustomListContext);

export const CustomListProvider = ({ children }: IDefaultProviderProps) => {
  const [listCustom, setListCustom] = useState<ICustomList[]>([]);

  useEffect(() => {
    const animesCustomList = async () => {
      const token = localStorage.getItem("GeekAnimes:@token");
      if (token) {
        try {
          const response = await api.get<ICustomList[]>(`/customlist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          //   navigate("/dashboard");
          setListCustom(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    animesCustomList();
  }, []);

  const data = {
    name: "Alternativa",
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
        setListCustom([...listCustom, response.data]);
      } catch (error) {
        console.log(error);
      }
    }
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
        listCustom,
        animeListCustomRegister,
        animeListCustomEdit,
        animeFavoriteDelete,
      }}
    >
      {children}
    </CustomListContext.Provider>
  );
};
