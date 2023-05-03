import { Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/Login";
import { Home } from "../pages/Home";
import { TravelProvider } from "../providers/travelProvider";

const Router = () => {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={
          <TravelProvider>
            <Home />
          </TravelProvider>
        } />
      </Routes>
    );
  };
  
  export default Router;
  