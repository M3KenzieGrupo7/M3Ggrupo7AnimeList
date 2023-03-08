import { StyledMainRegister } from "./style";
import FormRegister from "../../components/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <StyledMainRegister>
      <div className="info-box-form">
        <div className="link-box">
          <Link to={"/login"}>Voltar ao login</Link>
        </div>
        <h1>Cadastro</h1>
        <FormRegister />
      </div>
    </StyledMainRegister>
  );
};
export default RegisterPage;
