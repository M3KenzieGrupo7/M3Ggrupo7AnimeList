import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  IDataUser,
  IDefaultProviderProps,
  IEditFormValues,
  IIdUser,
  ILoginFormData,
  IRegisterFormValues,
  IUser,
} from "./types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

interface IUserContext {
  user: IUser | null;
  loginUser: (formData: ILoginFormData) => Promise<void>;
  registerUser: (formData: IRegisterFormValues) => Promise<void>;
  editUser: (formData: IEditFormValues, idUser: number) => Promise<void>;
  deleteUser: (idUser: number) => Promise<void>;
  userLogout: () => void;
  getUserSearch: (id: number) => Promise<void>;
  userSearch: IUser | null;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userSearch, setUserSearch] = useState<IUser | null>(null);
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
      toast.success("Login efetuado");
      setTimeout(() => navigate("/dashboard"), 1300);
    } catch (error) {
      const currentError = error as AxiosError;
      toast.error("Login ou E-mail incorretos");
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
        } catch (error) {
          console.error(error);
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
      localStorage.setItem(
        "GeekAnimes:@idUser",
        JSON.stringify(response.data.user.id)
      );
      setTimeout(() => navigate("/login"), 1300);
      toast.success("Registro efetuado");
    } catch (error) {
      const currentError = error as AxiosError;
      toast.error(currentError.message);
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
      } catch (error) {
        console.error(error);
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
        localStorage.removeItem("GeekAnimes:@idUser");
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("GeekAnimes:@token");
    localStorage.removeItem("GeekAnimes:@idUser");
    localStorage.removeItem("GeekAnimes:@user");
    navigate("/");
  };

  const getUserSearch = async (id: number) => {
    const token = localStorage.getItem("GeekAnimes:@token");
    if (token) {
      try {
        const response = await api.get<IUser>(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.setItem("GeekAnimes:@user", JSON.stringify(response.data));
        setUserSearch(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        registerUser,
        editUser,
        deleteUser,
        userLogout,
        getUserSearch,
        userSearch,
      }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </UserContext.Provider>
  );
};
