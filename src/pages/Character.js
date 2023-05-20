import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import CharacterSearch from "./Search-Functions/characterSearch";
import icon from "../assets/icon.png";

export default function Menu() {
  const [goToCharacter, setGoToWeapon] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);
  const [goToWeapon, setGoToMaterial] = React.useState(false);

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  const scrollToElement = () => {
    const targetElement = document.getElementById("scroll");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>GenshinMania</title>
      </head>
      <body>
        <nav className="nav">
          <a href="/" className="site-title">
            {" "}
            GenshinMania{" "}
          </a>
          <img src={icon} />
        </nav>

        <div className="sections">
          <div className="button-group">
            <button>Characters</button>
            <button>Weapons</button>
            <button>Artifacts</button>
            <button>Material</button>
          </div>
        </div>
        <h2 className="char-archive">Character Archive</h2>

        <div className="App">
          <div className="search-character" id="scroll">
            Search
          </div>
          <div>
            <input
              type="text"
              placeholder="Search characters"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <CharacterSearch
            search={search}
            onSearchChange={handleSearchChange}
          />
        </div>

        <div className="button-sort">
          <button>Element</button>
          <button>Rarity</button>
          <button>Region</button>
        </div>
        <div className="character-cards">
          <center>
            <img
              src="https://api.genshin.dev/characters/amber/icon"
              alt=""
              onClick={() => {
                setSearch("amber");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/barbara/icon"
              alt=""
              onClick={() => {
                setSearch("barbara");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/bennett/icon"
              alt=""
              onClick={() => {
                setSearch("bennett");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/fischl/icon"
              alt=""
              onClick={() => {
                setSearch("fischl");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/chongyun/icon"
              alt=""
              onClick={() => {
                setSearch("chongyun");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/kaeya/icon"
              alt=""
              onClick={() => {
                setSearch("kaeya");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/albedo/icon"
              alt=""
              onClick={() => {
                setSearch("albedo");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/aloy/icon"
              alt=""
              onClick={() => {
                setSearch("aloy");
                scrollToElement();
              }}
            />
            <img
              src="https://api.genshin.dev/characters/beidou/icon"
              alt=""
              onClick={() => {
                setSearch("beidou");
                scrollToElement();
              }}
            />
          </center>
        </div>
      </body>
    </html>
  );
}
