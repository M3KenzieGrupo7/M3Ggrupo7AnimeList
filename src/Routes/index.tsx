import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import DashBoard from "../pages/DashBoard/DashBoard";
import UserProfile from "../pages/UserProfile/UserProfile";
import DisplayCustomLists from "../pages/DisplayCustomLists/DisplayCustomLists";
import DisplayAnimesCustomList from "../pages/DisplayAnimesCustomList/DisplayAnimesCustomList";

const RouterPages = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<DashBoard />} />
    <Route path="/profile" element={<UserProfile />}>
      <Route index element={<DisplayCustomLists />} />
      <Route
        path="customList/:id/:idslist"
        element={<DisplayAnimesCustomList />}
      />
      <Route path="customList/:id/" element={<DisplayAnimesCustomList />} />
    </Route>
    <Route path="/user/:id" element={<UserProfile />}>
      <Route index element={<DisplayCustomLists />} />
      <Route path=":idslist" element={<DisplayAnimesCustomList />} />
      <Route path="customList/:id/" element={<DisplayAnimesCustomList />} />
    </Route>
  </Routes>
);
export default RouterPages;
