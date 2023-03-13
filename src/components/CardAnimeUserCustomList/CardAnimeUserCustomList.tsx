import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import { CustomListContext } from "../../providers/ListCustom";
import { ICustomListEdit } from "../../providers/ListCustom/type";
import { Card } from "./style";

interface ICardProps extends IAnimeList {
  listAnimes: IAnimeList[];
  setAnimeList: React.Dispatch<React.SetStateAction<IAnimeList[] | undefined>>;
  idList: number;
}

const CardAnimeUserCustomList = ({
  id,
  author,
  eps,
  genre,
  name,
  synopsis,
  urlImage,
  listAnimes,
  setAnimeList,
  idList,
}: ICardProps) => {
  const { removeAnimeInCustomList } = useContext(CustomListContext);
  const navigate = useNavigate();
  return (
    <Card>
      <div>
        <img src={urlImage} alt="" />
      </div>
      <h1>{name}</h1>
      <h4>- {eps} eps</h4>
      <h4>- {author}</h4>

      <button
        onClick={() => {
          const newList = listAnimes.filter((anime) => anime.id != id);
          setAnimeList(newList);
          let listIds: number[] = [];
          newList.forEach((anime) => listIds.push(anime.id));

          const CustomList: ICustomListEdit = {
            id: idList,
            amountAnimes: listIds.length,
            animesIds: listIds,
          };
          removeAnimeInCustomList(idList, CustomList);

          navigate(`/profile/customList/${idList}/${listIds}`);
        }}
      >
        Remover
      </button>
    </Card>
  );
};

export default CardAnimeUserCustomList;
