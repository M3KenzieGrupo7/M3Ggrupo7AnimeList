import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputModal from "../InputModal/InputModal";
import { Modal, ModalBackDrop } from "./style";
import schema from "./validation";
import { CustomListContext } from "../../providers/ListCustom";
interface IModalProps {
  isOpen: true | false;
  setModalIsOpen: (bool: true | false) => void;
}

interface Iregister {
  name: string;
  message?: string;
}

const ModalCreateList = ({ isOpen, setModalIsOpen }: IModalProps) => {
  const { animeListCustomRegister } = useContext(CustomListContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: errors,
  } = useForm<Iregister>({ resolver: yupResolver(schema) });

  const submit: SubmitHandler<Iregister> = (formData) => {
    const userID = localStorage.getItem("GeekAnimes:@idUser");
    const exec = async () => {
      const register = await animeListCustomRegister({
        animesIds: [],
        amountAnimes: 0,
        name: formData.name,
        userId: Number(userID),
      });

      if (register) {
        setModalIsOpen(false);
      }
    };
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
          <label htmlFor="Name">Nome:</label>
          <InputModal
            id="Name"
            label="Nome da Lista"
            placeholder="Digitar nome da lista"
            register={register("name")}
            type="text"
            key={1}
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
