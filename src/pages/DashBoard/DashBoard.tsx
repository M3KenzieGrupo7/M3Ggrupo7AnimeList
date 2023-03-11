import AnimeList from "../../components/AnimeList/AnimeList";
import AnimeListFavorites from "../../components/AnimeListFavorites/AnimeListFavorites";
import Header from "../../components/Header/Header";
import ModalEditAnimes from "../../components/ModalListAnimes";
import { StyledDashBoard } from "./style";

const DashBoard = () => {
  return (
    <StyledDashBoard>
      <Header></Header>
      <AnimeList></AnimeList>
      <AnimeListFavorites></AnimeListFavorites>
      <ModalEditAnimes />
    </StyledDashBoard>
  );
};

export default DashBoard;
