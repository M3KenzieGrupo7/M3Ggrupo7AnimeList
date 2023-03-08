import { useNavigate } from "react-router-dom";
import { StyledMainLogin } from "./style";
import FormLogin from "../../components/FormLogin";



const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <StyledMainLogin>
      <div className="container-infos">
        <h1>Login</h1>
        <FormLogin />
        <div className="register-box">
          <p>Ainda não possui cadastro?</p>
          <button onClick={() => navigate("/register")}>Cadastre-se</button>
        </div>
      </div>
    </StyledMainLogin>
  );
};

export default LoginPage;
