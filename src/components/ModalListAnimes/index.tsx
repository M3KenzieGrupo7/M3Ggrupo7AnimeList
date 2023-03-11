import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { CustomListContext } from "../../providers/ListCustom";
import { StyledModalEdit } from "./style";
import { IFormDataCustomList } from "./types";

const schema = yup.object({
  name: yup.string().required("O nome deve ser informado")
}).required();

const ModalEditAnimes = () => {
  const { listsCustom, animeListCustomRegister, open, setOpen } =
    useContext(CustomListContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormDataCustomList>({
    resolver: yupResolver(schema)
});

  const submit: SubmitHandler<IFormDataCustomList> = (data) => {
    event?.preventDefault();
    animeListCustomRegister(data)
    reset();
  };

  const submit2: SubmitHandler<IFormDataCustomList> = (data) => {
    event?.preventDefault();
    console.log(data)
    reset();
  };

  const registerItem = (value: string) => {
    event?.preventDefault();
    console.log(value);
    reset();
  };

  return (
    <StyledModalEdit open={open}>
      <div className="container-modal">
        <p onClick={() => {setOpen("none")}}>X</p>
        <div className="container-forms">
          <form className="form-select" onSubmit={handleSubmit(submit2)}>
            <section className="add-form">
              <label htmlFor="status">Adicionar na lista</label>
              <select>
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
          </form>
          <form className="create-list" onSubmit={handleSubmit(submit)}>
            <div className="add-list">
              <label htmlFor="new-list">Criar uma nova lista</label>
              <input
                type="text"
                id="new-list"
                {...register("name")}
                placeholder="Nome da lista"
              />
              {errors.name?.message}
              <button type="submit">Criar Lista</button>
            </div>
          </form>
        </div>
      </div>
    </StyledModalEdit>
  );
};

export default ModalEditAnimes;
