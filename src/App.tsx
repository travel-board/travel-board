import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/route";


function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
