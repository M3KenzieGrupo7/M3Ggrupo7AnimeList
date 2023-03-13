import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputModal from "../InputModal/InputModal";
import { Modal, ModalBackDrop } from "./style";
import schema from "./validation";

import { UserContext } from "../../providers/UserContext";
interface IModalProps {
  isOpen: true | false;
  setModalIsOpen: (bool: true | false) => void;
}

interface IUpdateProfile {
  nickname?: string;
  background: string;
}

const ModalCreateList = ({ isOpen, setModalIsOpen }: IModalProps) => {
  const { editUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: errors,
  } = useForm<IUpdateProfile>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<IUpdateProfile> = (formData) => {
    const userID = localStorage.getItem("GeekAnimes:@idUser");
    const exec = async () => {
      const updateProfile = await editUser(
        {
          background: formData.background,
          nickname: formData.nickname,
        },
        Number(userID)
      );
    };
    setModalIsOpen(false);
    exec();
    reset();
  };

  return isOpen ? (
    <ModalBackDrop>
      <Modal onSubmit={handleSubmit(submit)}>
        <button
          className="close"
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          Fechar
        </button>

        <div>
          <InputModal
            id="nickname"
            label="Nome da Lista"
            placeholder="Nickname..."
            register={register("nickname")}
            type="text"
            key={1}
            width={"100px"}
          ></InputModal>

          <InputModal
            id="avatar"
            label="Foto de perfil"
            placeholder="Nova foto de perfil"
            register={register("background")}
            type="text"
            key={2}
            width={"100px"}
          ></InputModal>
        </div>

        <button type="submit">Criar lista</button>
      </Modal>
    </ModalBackDrop>
  ) : (
    <></>
  );
};

export default ModalCreateList;
