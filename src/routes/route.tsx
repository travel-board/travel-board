import { Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/Login";
import { Home } from "../pages/Home";

const Router = () => {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  };
  
  export default Router;
  