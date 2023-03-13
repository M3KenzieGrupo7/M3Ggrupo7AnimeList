import AnimeList from "../../components/AnimeList/AnimeList";
import AnimeListFavorites from "../../components/AnimeListFavorites/AnimeListFavorites";
import Header from "../../components/Header/Header";
import { StyledMain } from "./style";

const DashBoard = () => {
  return (
    <>
      <Header></Header>
      <StyledMain>
        <AnimeList></AnimeList>
        <AnimeListFavorites></AnimeListFavorites>
      </StyledMain>
    </>
  );
};

export default DashBoard;
