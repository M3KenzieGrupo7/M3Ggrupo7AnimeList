import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import DashBoard from "../pages/DashBoard/DashBoard";
import UserProfile from "../pages/UserProfile/UserProfile";
import DisplayCustomLists from "../pages/DisplayCustomLists/DisplayCustomLists";
import DisplayAnimesCustomList from "../pages/DisplayAnimesCustomList/DisplayAnimesCustomList";
import { PublicRoutes } from "../components/PublicRoutes";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import SearchPage from "../pages/SearchPage/SearchPage";
import UserPage from "../pages/UserPage/UserPage";
import DisplayUserCustomLists from "../pages/DisplayUserCustomLists/DisplayUserCustomLists";
import DisplayCustomListUserPage from "../pages/DisplayAnimeListUserPage/DisplayCustomListUserPage";

const RouterPages = () => (
  <Routes>
    <Route path="/" element={<PublicRoutes />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>

    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/search/:searchValue" element={<SearchPage />} />
      <Route path="/profile" element={<UserProfile />}>
        <Route index element={<DisplayCustomLists />} />
        <Route
          path="customList/:id/:idslist"
          element={<DisplayAnimesCustomList />}
        />
        <Route path="customList/:id/" element={<DisplayAnimesCustomList />} />
      </Route>
      <Route path="/user/:id/" element={<UserPage />}>
        <Route index element={<DisplayUserCustomLists />} />
        <Route
          path="customList/:idList"
          element={<DisplayCustomListUserPage />}
        />
      </Route>
    </Route>
  </Routes>
);
export default RouterPages;
