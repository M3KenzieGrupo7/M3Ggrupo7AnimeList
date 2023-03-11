import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IAnimeList } from "../AnimesListContext/type";
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
  animeListCustomRegister: (formData: ICustomListRegister) => Promise<boolean>;
  animeListCustomEdit: (
    formData: ICustomListEdit,
    idAnime: number
  ) => Promise<void>;
  animeFavoriteDelete: (idAnime: number) => Promise<void>;
  getSpecificsAnimes: (listID: number[]) => Promise<IAnimeList[]>;
  open: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomListContext = createContext({} as ICustomListContext);

export const CustomListProvider = ({ children }: IDefaultProviderProps) => {
  const [listsCustom, setListsCustom] = useState<ICustomList[]>([]);
  const [open, setOpen] = useState("none");

  const getSpecificListsCustom = async (userID: number) => {
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
        console.log("deu certo", response.data);
        setListsCustom(response.data);
      } catch (error) {
        console.log("erro aqui");

        console.log(error);
      }
    }
  };

  const getSpecificsAnimes = async (listID: number[]) => {
    const token = localStorage.getItem("GeekAnimes:@token");

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
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
    return [];
  };

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
          setListsCustom(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    animesCustomList()
  }, []);
  

  const animeListCustomRegister = async (formData: ICustomListRegister) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    const idUser: number = JSON.parse(localStorage.getItem('GeekAnimes:@idUser') || "null");
    formData['userId'] = idUser;
    console.log(formData)
    if (token) {
      try {
        const response = await api.post<ICustomList>(`/customlist`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //   navigate("/dashboard");
        setListsCustom([...listsCustom, response.data]);
        toast.success("Lista Cadastrada com Sucesso!");
        return true;
      } catch (error) {
        console.log(error);
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
        listsCustom,
        getSpecificListsCustom,
        animeListCustomRegister,
        animeListCustomEdit,
        animeFavoriteDelete,
        getSpecificsAnimes,
        open,
        setOpen
      }}
    >
      {children}
    </CustomListContext.Provider>
  );
};
