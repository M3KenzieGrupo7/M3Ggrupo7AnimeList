import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { IFavoriteAnimes } from "../AnimesFavoritesContext/type";
import {
  IDataUser,
  IDefaultProviderProps,
  IEditFormValues,
  IIdUser,
  ILoginFormData,
  IRegisterFormValues,
  IUser,
} from "./types";

interface IUserContext {
  user: IUser | null;
  loginUser: (formData: ILoginFormData) => Promise<void>;
  registerUser: (formData: IRegisterFormValues) => Promise<void>;
  deleteUser: (idUser: number) => Promise<void>;
  animesFavoritesUser: (id: IIdUser) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const loginUser = async (formData: ILoginFormData) => {
    try {
      const response = await api.post<IDataUser>(`/login`, formData);
      localStorage.setItem("GeekAnimes:@token", response.data.accessToken);
      localStorage.setItem(
        "GeekAnimes:@idUser",
        JSON.stringify(response.data.user.id)
      );
      localStorage.setItem(
        "GeekAnimes:@user",
        JSON.stringify(response.data.user)
      );
      setUser(response.data.user);
      //   navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const idUser: IIdUser = JSON.parse(
      localStorage.getItem("GeekAnimes:@idUser") || "null"
    );
    const autoLogin = async (id: IIdUser) => {
      const token = localStorage.getItem("GeekAnimes:@token");
      if (token) {
        try {
          const response = await api.get<IUser>(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          localStorage.setItem(
            "GeekAnimes:@user",
            JSON.stringify(response.data)
          );
          setUser(response.data);
          //   navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
    };
    autoLogin(idUser);
  }, []);

  const registerUser = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post<IDataUser>(`/users`, formData);
      setUser(response.data.user);
      localStorage.setItem("GeekAnimes:@token", response.data.accessToken);
      localStorage.setItem(
        "GeekAnimes:@user",
        JSON.stringify(response.data.user)
      );
      //   navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (formData: IEditFormValues, idUser: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.patch<IUser>(`/users/${idUser}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        localStorage.setItem("GeekAnimes:@user", JSON.stringify(response.data));
        //   navigate("/dashboard")
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteUser = async (idUser: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        await api.delete<null>(`/users/${idUser}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem("GeekAnimes:@token");
        localStorage.removeItem("GeekAnimes:@user");
        //   navigate("/dashboard")
      } catch (error) {
        console.log(error);
      }
    }
  };

  const animesFavoritesUser = async (id: IIdUser) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.get<IFavoriteAnimes[]>(
          `/users/${id}/favorites`,
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        registerUser,
        deleteUser,
        animesFavoritesUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
