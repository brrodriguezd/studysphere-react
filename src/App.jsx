import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardCompra from "./components/CardCompra";
import LandingPage from "./components/LandingPage";
import Failure from "./components/Failure";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/pagos" element={<CardCompra />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
