import React, { useContext, useState } from "react";
import { StyledBTNCreateList } from "../../pages/DisplayCustomLists/style";
import { UserContext } from "../../providers/UserContext";
import ModalUpdateUser from "../ModalUpdateUser";
import { StyledUserInfo } from "./style";

const UserInfos = () => {
  const { user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <StyledUserInfo>
        <img src={user?.background} alt="" />

        <div>
          <h2>{user?.nickname}</h2>
          <h3>{user?.email}</h3>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Editar Perfil
          </button>
        </div>
      </StyledUserInfo>
      <ModalUpdateUser isOpen={openModal} setModalIsOpen={setOpenModal} />
    </>
  );
};

export default UserInfos;
