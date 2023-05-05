import { StyledRegister } from "./StyledRegister";
import logoUrl from "../../assets/logo.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";

export const RegisterPage = () => (
  <StyledRegister>
      <div className="formContainer">
      <figure>
        <img src={logoUrl} alt="Travel Board" />
      </figure>
      <RegisterForm />
    </div>
    <div className="imgContainer"></div>
  </StyledRegister>
);
