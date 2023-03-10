import { Navigate, Outlet } from "react-router-dom";
import { IUser2 } from "../../providers/UserContext/types";
import { DefaultTemplate } from "../Templates";

export const PublicRoutes = () => {
  const user: IUser2 | null = JSON.parse(
    localStorage.getItem("GeekAnimes:@user") || "null"
  );

  return (
    <DefaultTemplate>
      {user ? <Navigate to="/dashboard" /> : <Outlet />}
    </DefaultTemplate>
  );
};
