import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BTNBackProfilePage from "../../components/BTNBackProfilePage/BTNBackProfilePage";
import CardAnimeUserCustomList from "../../components/CardAnimeUserCustomList/CardAnimeUserCustomList";
import { IAnimeList } from "../../providers/AnimesListContext/type";

import { CustomListContext } from "../../providers/ListCustom";
import {
  AnimeCardsList,
  StyledBTNBack,
  StyledHeaderDisplayList,
} from "./style";

const DisplayCustomListUserPage = () => {
  const { getSpecificsAnimes } = useContext(CustomListContext);
  let { id, idList } = useParams();
  const [animes, setAnimes] = useState<IAnimeList[]>();
  const [quantityAnimes, setQuantityAnimes] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const exec = async () => {
      const animes = await getSpecificsAnimes(JSON.parse("[" + idList + "]"));
      setAnimes(animes);
      setQuantityAnimes(animes.length);
    };

    exec();
  }, []);

  return (
    <>
      <StyledBTNBack
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </StyledBTNBack>
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
        {quantityAnimes > 0 ? null : (
          <div>
            <h1>Nenhum Anime Adicionado na Lista :( </h1>
          </div>
        )}
      </AnimeCardsList>
    </>
  );
};

export default DisplayCustomListUserPage;
