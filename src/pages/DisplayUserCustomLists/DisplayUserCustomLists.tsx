import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalCreateList from "../../components/ModalCreateList/ModalCreateList";
import { CustomListContext } from "../../providers/ListCustom";
import { UserContext } from "../../providers/UserContext";
import { StyledBTNCreateList, StyledDivList, StyledLink } from "./style";

const DisplayUserCustomLists = () => {
  const { listsCustom, getSpecificListsCustom } = useContext(CustomListContext);

  const { id } = useParams();
  useEffect(() => {
    getSpecificListsCustom(Number(id));
  }, []);
  return (
    <>
      <StyledDivList>
        {listsCustom.map(({ name, animesIds, id, userId }) => {
          return (
            <StyledLink to={`/user/${userId}/customList/${animesIds}`}>
              {name}
            </StyledLink>
          );
        })}
      </StyledDivList>
    </>
  );
};

export default DisplayUserCustomLists;
