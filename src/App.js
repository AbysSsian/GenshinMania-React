import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Menu from "./pages/Menu";
import Character from "./pages/Character";
import Weapon from "./pages/Weapon";
import Food from "./pages/Food";
import Artifact from "./pages/Artifact";
import Mondstadt from "./pages/Mondstadt";
import Liyue from "./pages/Liyue";
import Inazuma from "./pages/Inazuma";
import Sumeru from "./pages/Sumeru";
import About from "./pages/About";

export default function App() {
  useEffect(() => {
    document.title = "GenshinMania";
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/" element={<Menu />} />
          <Route path="/genshinmania" element={<Menu />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Weapon" element={<Weapon />} />
          <Route path="/Artifact" element={<Artifact />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Mondstadt" element={<Mondstadt />} />
          <Route path="/Liyue" element={<Liyue />} />
          <Route path="/Inazuma" element={<Inazuma />} />
          <Route path="/Sumeru" element={<Sumeru />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
