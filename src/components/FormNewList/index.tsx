import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { CustomListContext } from "../../providers/ListCustom";
import { StyledFormNewList } from "./style";
import { IFormDataCustomList } from "./types";

const schema = yup
  .object({
    name: yup.string().required("O nome deve ser informado"),
  })
  .required();

const FormNewList = () => {
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
    <StyledFormNewList className="create-list" onSubmit={handleSubmit(submit)}>
      <div className="add-list">
        <label htmlFor="new-list">Criar uma nova lista</label>
        <input
          type="text"
          id="new-list"
          {...register("name")}
          placeholder="Nome da lista"
        />
        <button type="submit">Criar Lista</button>
      </div>
    </StyledFormNewList>
  );
};

export default FormNewList;
