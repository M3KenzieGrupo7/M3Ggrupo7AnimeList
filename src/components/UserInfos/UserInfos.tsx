import React, { useContext } from "react";
import { StyledBTNCreateList } from "../../pages/DisplayCustomLists/style";
import { UserContext } from "../../providers/UserContext";
import { StyledUserInfo } from "./style";

const UserInfos = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledUserInfo>
      <img src={user?.background} alt="" />

      <div>
        <h2>{user?.nickname}</h2>
        <h3>{user?.email}</h3>
        <button>Editar Perfil</button>
      </div>
    </StyledUserInfo>
  );
};

export default UserInfos;
