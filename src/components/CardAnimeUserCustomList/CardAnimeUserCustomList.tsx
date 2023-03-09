import React from "react";
import { IAnimeList } from "../../providers/AnimesListContext/type";
import { Card } from "./style";

const CardAnimeUserCustomList = ({
  id,
  author,
  eps,
  genre,
  name,
  synopsis,
  urlImage,
}: IAnimeList) => {
  return (
    <Card>
      <div>
        <img src={urlImage} alt="" />
      </div>
      <h1>{name}</h1>
      <h4>- {eps} eps</h4>
      <h4>- {author}</h4>

      <button>Remover</button>
    </Card>
  );
};

export default CardAnimeUserCustomList;
