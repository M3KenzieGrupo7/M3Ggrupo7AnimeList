import GengarGifLoading from "../../assets/pokemonLoading.gif";
import LoadingTextImage from "../../assets/LoadingTextImg.svg";
import StyledDivLoading from "./style";
export const Loading = () => {
  return (
    <StyledDivLoading>
      <img src={GengarGifLoading} alt="" />
      <img src={LoadingTextImage} alt="carregando" />
    </StyledDivLoading>
  );
};
export default Loading;
