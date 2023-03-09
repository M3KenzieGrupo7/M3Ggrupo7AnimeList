import AnimeList from "../../components/AnimeList/AnimeList";
import AnimeListFavorites from "../../components/AnimeListFavorites/AnimeListFavorites";
import Header from "../../components/Header/Header";

const DashBoard = () => {
  return (
    <>
      <Header></Header>
      <AnimeList></AnimeList>
      <AnimeListFavorites></AnimeListFavorites>
    </>
  );
};

export default DashBoard;
