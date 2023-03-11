import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import { CustomListContext } from "../../providers/ListCustom";
import { ICustomListEdit } from "../../providers/ListCustom/type";
import { Card } from "./style";

const CardAnimeSearch = ({ author, eps, name, urlImage }: IAnimeList) => {
  return (
    <Card>
      <div>
        <img src={urlImage} alt="" />
      </div>
      <h1>{name}</h1>
      <h4>- {eps} eps</h4>
      <h4>- {author}</h4>
    </Card>
  );
};

export default CardAnimeSearch;
