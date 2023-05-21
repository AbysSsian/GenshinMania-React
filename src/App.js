import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Character from "./pages/Character";
import Weapon from "./pages/Weapon";
import Material from "./pages/Material";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Weapon" element={<Weapon />} />
          <Route path="/Material" element={<Material />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
