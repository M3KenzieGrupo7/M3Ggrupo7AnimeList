import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalCreateList from "../../components/ModalCreateList/ModalCreateList";
import { CustomListContext } from "../../providers/ListCustom";
import { UserContext } from "../../providers/UserContext";
import { StyledBTNCreateList, StyledDivList, StyledLink } from "./style";

const DisplayCustomLists = () => {
  const { listsCustom, getSpecificListsCustom } = useContext(CustomListContext);
  const { user } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getSpecificListsCustom(
      user?.id || Number(localStorage.getItem("GeekAnimes:@idUser"))
    );
  }, []);
  return (
    <>
      <StyledBTNCreateList
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Criar nova Lista
      </StyledBTNCreateList>
      <ModalCreateList isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <StyledDivList>
        {listsCustom.map(({ name, animesIds, id }) => {
          return (
            <StyledLink to={`/profile/customList/${id}/${animesIds}`}>
              {name}
            </StyledLink>
          );
        })}
      </StyledDivList>
    </>
  );
};

export default DisplayCustomLists;
