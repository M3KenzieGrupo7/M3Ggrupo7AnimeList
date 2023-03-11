import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CardAnimeSearch from "../../components/CardAnimeSearch/CardAnimeSearch";
import CardAnimeUserCustomList from "../../components/CardAnimeUserCustomList/CardAnimeUserCustomList";
import Header from "../../components/Header/Header";
import { SearchContext } from "../../providers/SearchContext";
import { StyledContainer } from "./style";

const SearchPage = () => {
  const { searchValue } = useParams();
  const { animes, profileUsers } = useContext(SearchContext);

  return (
    <>
      <Header />
      <StyledContainer>
        <h1>Resultados para pesquisa: {searchValue}</h1>
        {animes?.map((anime) => {
          return (
            <CardAnimeSearch
              author={anime.author}
              eps={anime.eps}
              id={anime.id}
              name={anime.name}
              urlImage={anime.urlImage}
              genre={anime.genre}
              synopsis={anime.synopsis}
            ></CardAnimeSearch>
          );
        })}
        {profileUsers?.map((user) => {
          return <h1>{user.name}</h1>;
        })}
      </StyledContainer>
    </>
  );
};

export default SearchPage;
