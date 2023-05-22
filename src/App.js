import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Character from "./pages/Character";
import Weapon from "./pages/Weapon";
import Food from "./pages/Food";
import Artifact from "./pages/Artifact";
import Mondstadt from "./pages/Mondstadt";
import Liyue from "./pages/Liyue";
import Inazuma from "./pages/Inazuma";
import Sumeru from "./pages/Sumeru";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Weapon" element={<Weapon />} />
          <Route path="/Artifact" element={<Artifact />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Mondstadt" element={<Mondstadt />} />
          <Route path="/Liyue" element={<Liyue />} />
          <Route path="/Inazuma" element={<Inazuma />} />
          <Route path="/Sumeru" element={<Sumeru />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
