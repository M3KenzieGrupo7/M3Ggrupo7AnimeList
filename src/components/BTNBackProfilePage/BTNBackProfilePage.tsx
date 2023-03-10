import React from "react";
import { StyledLinkBackProfilePage } from "./style";

const BTNBackProfilePage = () => {
  return (
    <StyledLinkBackProfilePage to={"/profile"}>
      Voltar
    </StyledLinkBackProfilePage>
  );
};

export default BTNBackProfilePage;
