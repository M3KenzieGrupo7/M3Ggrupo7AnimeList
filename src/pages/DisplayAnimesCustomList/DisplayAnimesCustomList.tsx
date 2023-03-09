import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomListContext } from "../../providers/ListCustomContext";

const DisplayAnimesCustomList = () => {
  const { listsCustom } = useContext(CustomListContext);

  console.log(listsCustom);
  return <>ANIMES</>;
};

export default DisplayAnimesCustomList;
