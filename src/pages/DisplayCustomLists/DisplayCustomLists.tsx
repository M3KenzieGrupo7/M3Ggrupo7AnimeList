import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomListContext } from "../../providers/ListCustomContext";
import { UserContext } from "../../providers/UserContext";

const DisplayCustomLists = () => {
  const { listsCustom, getListsCustom } = useContext(CustomListContext);
  const { user } = useContext(UserContext);

  getListsCustom(user?.id || 0);

  return (
    <>
      {listsCustom.map(({ name, animesIds, id }) => {
        return <Link to={`/profile/customList/${id}`}>{name}</Link>;
      })}
    </>
  );
};

export default DisplayCustomLists;
