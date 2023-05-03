import { Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/Login";
import { RegisterPage } from "../pages/RegisterUser";

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  };
  
  export default Router;
  