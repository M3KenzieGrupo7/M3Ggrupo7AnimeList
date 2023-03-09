import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import UserInfos from "../../components/UserInfos/UserInfos";
import { CustomListContext } from "../../providers/ListCustomContext";
import { ICustomList } from "../../providers/ListCustomContext/type";
import { api } from "../../services/api";

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
