import { Navigate, Outlet } from "react-router-dom";
import { IUser2 } from "../../providers/UserContext/types";

export const ProtectedRoutes = () => {
  const user: IUser2 | null = JSON.parse(
    localStorage.getItem("GeekAnimes:@user") || "null"
  );

  return user ? <Outlet /> : <Navigate to="/" />;
};
