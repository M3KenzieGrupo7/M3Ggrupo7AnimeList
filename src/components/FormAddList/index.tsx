import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { CustomListContext } from "../../providers/ListCustom";
import { StyledFormAddList } from "./style";
import { IFormDataCustomList } from "./types";
import { toast } from "react-toastify";

const schema = yup
  .object({
    id: yup.string().required(),
  })
  .required();

interface IFormAddProps {
  animeid: number;
}
const FormAddList = ({ animeid }: IFormAddProps) => {
  const { listsCustom, animeListCustomEdit } = useContext(CustomListContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormDataCustomList>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<IFormDataCustomList> = (data) => {
    const exec = async () => {
      const { id } = data;

      let list = listsCustom.filter((list) => list.id == Number(id))[0];
      let listUpdateAnimesID =
        list.animesIds?.filter((animeID) => animeID != animeid) || [];
      listUpdateAnimesID.push(animeid);

      list.animesIds = listUpdateAnimesID;

      await animeListCustomEdit(list, Number(id));
      toast.success("Anime Adiconado a Lista " + list.name + " com sucesso!");
    };
    exec();
    reset();
  };

  return (
    <StyledFormAddList className="form-select" onSubmit={handleSubmit(submit)}>
      <section className="add-form">
        <label htmlFor="status">Adicionar na lista</label>
        <select {...register("id")}>
          <option value="">Selecionar Lista</option>
          {listsCustom.map((list) => {
            return (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
            );
          })}
        </select>
        <button type="submit" className="btn-add">
          Adicionar na lista
        </button>
      </section>
    </StyledFormAddList>
  );
};

export default FormAddList;
