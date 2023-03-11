import React, { useContext } from "react";
import { StyledBTNCreateList } from "../../pages/DisplayCustomLists/style";
import { UserContext } from "../../providers/UserContext";
import { StyledUserInfo } from "./style";

const DisplayUserInfos = () => {
  const { userSearch } = useContext(UserContext);

  return (
    <StyledUserInfo>
      <img src={userSearch?.background} alt="" />

      <div>
        <h2>{userSearch?.nickname}</h2>
      </div>
    </StyledUserInfo>
  );
};

export default DisplayUserInfos;
