import { Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/Login";

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    );
  };
  
  export default Router;
  