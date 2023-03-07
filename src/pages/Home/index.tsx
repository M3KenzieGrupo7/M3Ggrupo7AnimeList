import logo from "../../assets/logo70x45.svg";
import { useNavigate } from "react-router-dom";
import { StyledMain } from "./style";

const HomePage = () => {
    const navigate = useNavigate();

  return (
    <StyledMain>
        <div className="void-div"></div>
      <div>
      <img src={logo} alt="" />
      <div className="box-info">

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloremque accusamus tenetur modi dignissimos, nulla quo quod
          laboriosam! Error excepturi molestiae maiores iure, eius provident.
          Illo doloribus dolorem modi debitis!
        </h1>
      </div>
     
      <div className="button-box">
        <button className="login-btn" onClick={()=> navigate('/login')}>Login</button>
        <button className="register-btn" onClick={()=> navigate('/register')}>Cadastr-se</button>

        </div>
      </div>
    </StyledMain>
  );
};
export default HomePage;
