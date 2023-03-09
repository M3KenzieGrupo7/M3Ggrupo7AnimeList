import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import UserInfos from "../../components/UserInfos/UserInfos";

const UserProfile = () => {
  return (
    <>
      <Header />
      <UserInfos></UserInfos>
      <Outlet />
    </>
  );
};

export default UserProfile;
