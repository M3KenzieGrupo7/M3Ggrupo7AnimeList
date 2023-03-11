import AnimeList from "../../components/AnimeList/AnimeList";
import AnimeListFavorites from "../../components/AnimeListFavorites/AnimeListFavorites";
import Header from "../../components/Header/Header";
import { StyledDashBoard } from "./style";

const DashBoard = () => {
  return (
    <StyledDashBoard>
      <Header></Header>
      <AnimeList></AnimeList>
      <AnimeListFavorites></AnimeListFavorites>
    </StyledDashBoard>
  );
};

export default DashBoard;
