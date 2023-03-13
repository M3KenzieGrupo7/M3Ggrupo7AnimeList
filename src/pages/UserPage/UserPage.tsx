import { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import DisplayUserInfos from "../../components/DisplayUserInfos/DisplayUserInfos";
import Header from "../../components/Header/Header";
import { UserContext } from "../../providers/UserContext";
import { StyledUserProfile } from "./style";

const UserPage = () => {
  const { getUserSearch } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    getUserSearch(Number(id));
  }, []);
  return (
    <>
      <Header />
      <DisplayUserInfos />
      <StyledUserProfile>
        <Outlet />
      </StyledUserProfile>
    </>
  );
};

export default UserPage;
