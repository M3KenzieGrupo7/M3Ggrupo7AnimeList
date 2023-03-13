import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { CustomListContext } from "../../providers/ListCustom";
import { StyledModalEdit } from "./style";
import { IFormDataCustomList } from "./types";
import FormAddList from "../FormAddList";
import FormNewList from "../FormNewList";

const schema = yup
  .object({
    name: yup.string().required("O nome deve ser informado"),
  })
  .required();
interface IFormAddProps {
  animeid: number;
}
const ModalEditAnimes = ({ animeid }: IFormAddProps) => {
  const {
    listsCustom,
    animeListCustomRegister,
    open,
    setOpen,
    getSpecificListsCustom,
  } = useContext(CustomListContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormDataCustomList>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<IFormDataCustomList> = (data) => {
    animeListCustomRegister(data);
    reset();
  };

 
  return (
    <StyledModalEdit open={open}>
      <div className="container-modal">
        <p
          onClick={() => {
            setOpen("none");
          }}
        >
          X
        </p>
        <div className="container-forms">
          <FormAddList animeid={animeid} />
          <FormNewList />
        </div>
      </div>
    </StyledModalEdit>
  );
};

export default ModalEditAnimes;
