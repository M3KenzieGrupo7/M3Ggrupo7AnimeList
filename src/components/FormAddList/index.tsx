import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { CustomListContext } from "../../providers/ListCustom";
import { StyledFormAddList, } from "./style";
import { IFormDataCustomList } from "./types";

const schema = yup
  .object({
    name: yup.string().required("O nome deve ser informado"),
  })
  .required();

const FormAddList = () => {
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

  const submit2: SubmitHandler<IFormDataCustomList> = (data) => {
    const {name} = data;
    const idItem = listsCustom.filter(item => {
      if(item.name === name){
        data.id = Number(item.id);
      }
    })
   
    console.log(data);

    
    reset();
  };

  const idItem = (id: number) => {
    console.log(id)
  }


  return (
    <StyledFormAddList className="form-select" onSubmit={handleSubmit(submit2)}>
      <section className="add-form">
        <label htmlFor="status">Adicionar na lista</label>
        <select {...register("name")} >
          <option value=""></option>
          {listsCustom.map((itensList) => {
            return (
              <option key={itensList.id} value={itensList.name}>
                {itensList.name}
              </option>
            );
          })}
        </select>
        <button type="submit" className="btn-add">
          Adicionar
        </button>
      </section>
    </StyledFormAddList>
  );
};

export default FormAddList;
