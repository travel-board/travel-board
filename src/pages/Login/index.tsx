import { LoginForm } from "../../components/Form/LoginForm";
import { Link } from "react-router-dom";
import { StyledLogin } from "./StyledLogin.ts";
import logoUrl from "../../assets/logo.svg";

export const LoginPage = () => (
  <StyledLogin>
    <div className="imgContainer"></div>
    <div className="formContainer">
      <figure>
        <img src={logoUrl} alt="Travel Board" />
      </figure>
      <LoginForm />
      <p>Ainda não possui um cadastro?</p>
      <Link to="/register">Cadastrar</Link>
    </div>
  </StyledLogin>
);
