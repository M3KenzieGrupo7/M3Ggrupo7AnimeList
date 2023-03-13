import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomListContext } from "../../providers/ListCustom";
import { StyledDivList, StyledLink } from "./style";

const DisplayUserCustomLists = () => {
  const { listsCustom, getSpecificListsCustom } = useContext(CustomListContext);

  const { id } = useParams();
  useEffect(() => {
    getSpecificListsCustom(Number(id));
  }, []);
  return (
    <>
      <StyledDivList>
        {listsCustom.map(({ name, animesIds, id, userId }) => {
          return (
            <StyledLink to={`/user/${userId}/customList/${animesIds}`}>
              {name}
            </StyledLink>
          );
        })}
      </StyledDivList>
    </>
  );
};

export default DisplayUserCustomLists;
