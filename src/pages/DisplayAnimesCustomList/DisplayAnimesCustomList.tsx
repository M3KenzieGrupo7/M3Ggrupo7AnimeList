import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardAnimeUserCustomList from "../../components/CardAnimeUserCustomList/CardAnimeUserCustomList";
import { IAnimeList } from "../../providers/AnimesListContext/type";

import { CustomListContext } from "../../providers/ListCustom";
import { AnimeCardsList } from "./style";

const DisplayAnimesCustomList = () => {
  const { listsCustom, getSpecificsAnimes } = useContext(CustomListContext);
  let { id, idslist } = useParams();
  const [animes, setAnimes] = useState<IAnimeList[]>();
  console.log(listsCustom);

  useEffect(() => {
    const exec = async () => {
      const animes = await getSpecificsAnimes(JSON.parse("[" + idslist + "]"));

      setAnimes(animes);
    };

    exec();
  }, []);
  return (
    <AnimeCardsList>
      {animes?.map(({ name, urlImage, author, eps, genre, synopsis, id }) => (
        <CardAnimeUserCustomList
          author={author}
          eps={eps}
          genre={genre}
          name={name}
          synopsis={synopsis}
          urlImage={urlImage}
          id={id}
          key={id}
        />
      ))}
    </AnimeCardsList>
  );
};

export default DisplayAnimesCustomList;
