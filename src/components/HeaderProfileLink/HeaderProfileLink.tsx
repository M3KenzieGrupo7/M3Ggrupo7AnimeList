import React from "react";
import { OutletProps } from "react-router";
import { IUser } from "../../providers/UserContext/types";
import { StyledPerfil } from "./style";

interface IProfileLinkProps {
  nickname: string;
  avatar: string;
}
const HeaderProfileLink = ({ nickname, avatar }: IProfileLinkProps) => {
  return (
    <StyledPerfil>
      <img src={avatar} alt="Avatar" />
      <p>{nickname}</p>
    </StyledPerfil>
  );
};

export default HeaderProfileLink;
