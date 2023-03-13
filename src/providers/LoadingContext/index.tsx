import { createContext, useState } from "react";
import Loading from "../../components/Loading";
import { IDefaultProviderProps } from "../UserContext/types";
import {} from "./type";

interface IloadingProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LoadingContext = createContext({} as IloadingProps);

export const LoadingProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading ? <Loading></Loading> : null}
    </LoadingContext.Provider>
  );
};
