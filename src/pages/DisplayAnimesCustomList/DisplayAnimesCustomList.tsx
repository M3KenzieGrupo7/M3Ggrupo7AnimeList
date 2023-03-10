import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BTNBackProfilePage from "../../components/BTNBackProfilePage/BTNBackProfilePage";
import CardAnimeUserCustomList from "../../components/CardAnimeUserCustomList/CardAnimeUserCustomList";
import { IAnimeList } from "../../providers/AnimesListContext/type";

import { CustomListContext } from "../../providers/ListCustom";
import {
  AnimeCardsList,
  StyledBTNDeleteList,
  StyledHeaderDisplayList,
} from "./style";

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
      <StyledHeaderDisplayList>
        <StyledBTNDeleteList
          onClick={() => {
            customListDelete(Number(id));
            navigate("/profile");
          }}
        >
          Excluir Lista
        </StyledBTNDeleteList>
        <BTNBackProfilePage />
      </StyledHeaderDisplayList>

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
        {animes ? null : (
          <div>
            <h1>Nenhum Anime Adicionado na Lista :( </h1>
          </div>
        )}
      </AnimeCardsList>
    </>
  );
};

export default DisplayAnimesCustomList;
