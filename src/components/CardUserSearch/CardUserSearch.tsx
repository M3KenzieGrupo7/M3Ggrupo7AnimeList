import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import { CustomListContext } from "../../providers/ListCustom";
import { ICustomListEdit } from "../../providers/ListCustom/type";
import { IUser } from "../../providers/UserContext/types";
import { Card } from "./style";

const CardUserSearch = ({ avatar, background, nickname, id }: IUser) => {
  return (
    <Card to={`/user/${id}`}>
      <div>
        <img src={background} alt="" />
      </div>
      <h1>{nickname}</h1>
    </Card>
  );
};

export default CardUserSearch;
