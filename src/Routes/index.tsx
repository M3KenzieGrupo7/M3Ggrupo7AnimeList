import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import DashBoard from "../pages/DashBoard/DashBoard";

const RouterPages = () => (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  
);
export default RouterPages;
