import { useContext } from "react";
import { useParams } from "react-router-dom";
import CardAnimeSearch from "../../components/CardAnimeSearch/CardAnimeSearch";
import CardUserSearch from "../../components/CardUserSearch/CardUserSearch";
import Header from "../../components/Header/Header";
import { SearchContext } from "../../providers/SearchContext";
import { StyledContainer, StyledLink } from "./style";

const SearchPage = () => {
  const { searchValue } = useParams();
  const { animes, profileUsers, filtredListsCustom } =
    useContext(SearchContext);

  return (
    <>
      <Header />
      <StyledContainer>
        <h1>Resultados para pesquisa: {searchValue}</h1>
        <h2>Animes</h2>
        <section>
          {animes?.length ? null : (
            <h3>Não foi possivel Localizar nenhum Anime</h3>
          )}
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
                key={anime.id + anime.author}
              ></CardAnimeSearch>
            );
          })}
        </section>

        <h2>Usuarios</h2>
        <section>
          {profileUsers?.map((user) => {
            return (
              <CardUserSearch
                key={"UserSearch" + user.id}
                avatar={user.avatar}
                background={user.background}
                nickname={user.nickname}
                email={""}
                name={""}
                id={user.id}
              />
            );
          })}
          {profileUsers ? null : (
            <h3>Não foi possivel Localizar nenhum Usuario</h3>
          )}
        </section>
        <h2>Listas</h2>
        <section>
          {filtredListsCustom?.map((list) => {
            return (
              <StyledLink
                to={`/user/${list.userId}/customList/${
                  list.animesIds.length > 0 ? list.animesIds : 0
                }`}
                key={list.id + list.userId}
              >
                {list.name}
              </StyledLink>
            );
          })}
          {filtredListsCustom ? null : (
            <h3>Não foi possivel Localizar nenhuma Lista</h3>
          )}
        </section>
      </StyledContainer>
    </>
  );
};

export default SearchPage;
