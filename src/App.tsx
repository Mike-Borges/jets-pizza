import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import CustomizePage from "./pages/Customize/CustomizePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import CrunchClub from "./pages/CrunchClub/CrunchClub";
import Deals from "./pages/Deals/Deals";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/customize/:slug" element={<CustomizePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/crunchClub" element={<CrunchClub />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </div>
  );
}

export default App;
