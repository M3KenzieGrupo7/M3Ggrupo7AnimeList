import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardAnimeUserCustomList from "../../components/CardAnimeUserCustomList/CardAnimeUserCustomList";
import { IAnimeList } from "../../providers/AnimesListContext/type";

import { CustomListContext } from "../../providers/ListCustom";
import { AnimeCardsList } from "./style";

const DisplayAnimesCustomList = () => {
  const { listsCustom, getSpecificsAnimes, customListDelete } =
    useContext(CustomListContext);
  let { id, idslist } = useParams();
  const idList = id;
  const [animes, setAnimes] = useState<IAnimeList[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const exec = async () => {
      const animes = await getSpecificsAnimes(JSON.parse("[" + idslist + "]"));
      setAnimes(animes);
    };

    exec();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          customListDelete(Number(id));
          navigate("/profile");
        }}
      >
        Excluir Lista
      </button>
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
            listAnimes={animes}
            setAnimeList={setAnimes}
            idList={Number(idList)}
          />
        ))}
      </AnimeCardsList>
    </>
  );
};

export default DisplayAnimesCustomList;
