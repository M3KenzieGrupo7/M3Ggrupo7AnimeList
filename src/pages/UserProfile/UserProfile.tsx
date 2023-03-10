import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import UserInfos from "../../components/UserInfos/UserInfos";
import { StyledUserProfile } from "./style";

const UserProfile = () => {
  return (
    <>
      <Header />
      <StyledUserProfile>
        <UserInfos></UserInfos>
        <Outlet />
      </StyledUserProfile>
    </>
  );
};

export default UserProfile;
