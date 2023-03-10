import logo from "../../assets/logo70x45.svg";
import { useNavigate } from "react-router-dom";
import { StyledMain } from "./style";
import Welcome from "../../assets/Welcomehome.gif"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <StyledMain>
    
      <div className="box-info">
        <img src={logo} alt="imagem da logo da plataforma" />
        <div >
          <h2>
            Bem vindo a Geek Animes, aqui você pode criar suas próprias listas
            de seus animes de acordo com o seu humor, ou uma lista
             com seus animes favoritos! Venha ver animes com a Geek
            Animes
          </h2>
        

          <img className="gif-img" src={Welcome} alt="" />
 
        </div>

        <div className="button-box">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </StyledMain>
  );
};
export default HomePage;
