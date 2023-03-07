import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iDataUser, iDefaultProviderProps, iEditFormValues, iFavoriteAnime, iIdUser, iLoginFormData, iRegisterFormValues, iUser } from "./types";

interface iUserContext {
    user: iUser | null;
    userLogin: (formData: iLoginFormData) => Promise<void>;
    userRegister: (formData: iRegisterFormValues) => Promise<void>;
    userDelete: (idUser: number) => Promise<void>;
    userAnimesFavorites: (id: iIdUser) => Promise<void>
  }

export const UserContext = createContext({}  as iUserContext);

export const UserProvider = ({children}: iDefaultProviderProps) => {
    const [user, setUser] = useState<iUser | null>(null);
    const navigate = useNavigate();

    const userLogin = async (formData: iLoginFormData) => {
        try {
          const response = await api.post<iDataUser>(`/login`, formData);
          localStorage.setItem("@TOKEN", response.data.accessToken);
          localStorage.setItem("@IDUSER", JSON.stringify(response.data.user.id) );
          localStorage.setItem("@USER", JSON.stringify(response.data.user));
          setUser(response.data.user);
        //   navigate("/dashboard");
        } 
        catch (error) {
          console.log(error);
        } 
    };

    useEffect(() => {
        const idUser: iIdUser  = JSON.parse(localStorage.getItem('@IDUSER') || "null");
        const autoLogin = async (id: iIdUser) => {
            const token = localStorage.getItem("@TOKEN"); 
            if(token){
                try {
                  const response = await api.get<iUser>(`/users/${id}`, {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  });
                  localStorage.setItem("@USER", JSON.stringify(response.data));
                  setUser(response.data);
                //   navigate("/dashboard");
                } 
                catch (error) {
                  console.log(error);
                } 
            }
        };
        autoLogin(idUser)
    }, [])

    const userRegister = async (formData: iRegisterFormValues) => {
        try {
          const response = await api.post<iDataUser>(`/users`, formData);
          setUser(response.data.user);
          localStorage.setItem("@TOKEN", response.data.accessToken);
          localStorage.setItem("@USER", JSON.stringify(response.data.user));
        //   navigate("/dashboard")
        } 
        catch (error) {
          console.log(error)
        }
      };

    const userEdit = async (formData: iEditFormValues, idUser:number) => {
      const token = localStorage.getItem("@TOKEN");
      if(token){
        try {
          const response = await api.patch<iUser>(`/users/${idUser}`, formData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setUser(response.data);
          localStorage.setItem("@USER", JSON.stringify(response.data));
        //   navigate("/dashboard")
        } 
        catch (error) {
          console.log(error)
        }
      }
    };

    const userDelete = async (idUser:number) => {
      const token = localStorage.getItem("@TOKEN");
      if(token){
        try {
          await api.delete<null>(`/users/${idUser}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USER");
        //   navigate("/dashboard")
        } 
        catch (error) {
          console.log(error)
        }
      }
    };

    const userAnimesFavorites = async (id: iIdUser) => {
      const token = localStorage.getItem("@TOKEN"); 
      if(token){
        try {
          const response = await api.get<iFavoriteAnime[]>(`/users/${id}/favorites`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          localStorage.setItem("@FavAnimes", JSON.stringify(response.data));
        //   navigate("/dashboard");
        } 
        catch (error) {
          console.log(error);
        } 
      }
    };

    return(
        <UserContext.Provider 
        value={{
            userLogin,
            user,
            userRegister,
            userDelete,
            userAnimesFavorites
        }}>
            { children }
        </UserContext.Provider>
    );
};