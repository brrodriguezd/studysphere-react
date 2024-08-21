import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardCompra from "./components/CardCompra";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/pagos" element={<CardCompra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
