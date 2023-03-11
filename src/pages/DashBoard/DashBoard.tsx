import AnimeList from "../../components/AnimeList/AnimeList";
import AnimeListFavorites from "../../components/AnimeListFavorites/AnimeListFavorites";
import Header from "../../components/Header/Header";
import { StyledMain } from "./style";

const DashBoard = () => {
  return (
    <>
      <Header></Header>
      <StyledMain>
        {/* <div> */}
        <AnimeList></AnimeList>
        <AnimeListFavorites></AnimeListFavorites>
        {/* </div> */}
      </StyledMain>
    </>
  );
};

export default DashBoard;
