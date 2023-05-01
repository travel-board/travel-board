import { LoginForm } from "../../components/Form/LoginForm"
import { Link } from "react-router-dom";
import { StyledLogin } from "../../components/StyledLogin/StyledLogin";
export const LoginPage = () => (
    <StyledLogin>
        <div className="imgContainer">
            <figure>
                <img src="" alt="foto" />
            </figure>
        </div>
        <div className="formContainer">
                <img src="/Users/larissa/Kenzie/m3/Entregas/Travel board/travel-board/src/assets/logo .png" alt="Travel Board"/>
                <LoginForm />
                <p>Ainda não possui um cadastro?</p>
                <Link to="/singup">Cadastrar</Link>
        </div>
    </StyledLogin>
)