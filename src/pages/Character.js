import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import CharacterSearch from "./Search-Functions/characterSearch";
import icon from "../assets/icon.png";
import charactersData from "./Search-Functions/charactersData";

export default function Menu() {
  const [selectedElement, setSelectedElement] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [selectedNation, setSelectedNation] = useState("All");

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

  const handleElementChange = (event) => {
    setSelectedElement(event.target.value);
  };

  const handleRarityChange = (event) => {
    setSelectedRarity(event.target.value);
  };

  const handleNationChange = (event) => {
    setSelectedNation(event.target.value);
  };

  const filteredCharacters = charactersData.filter((character) => {
    const isElementMatched =
      selectedElement === "All" || character.element === selectedElement;
    const isRarityMatched =
      selectedRarity === "All" || character.rarity === parseInt(selectedRarity);
    const isNationMatched =
      selectedNation === "All" || character.nation === selectedNation;
    return isElementMatched && isRarityMatched && isNationMatched;
  });

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

        <div>
          <center>
            <div className="filter">
              <div>
                <label className="label">
                  Element:
                  <select
                    value={selectedElement}
                    onChange={handleElementChange}
                    className="selection"
                  >
                    <option value="All">All</option>
                    <option value="Pyro">Pyro</option>
                    <option value="Hydro">Hydro</option>
                    <option value="Anemo">Anemo</option>
                    <option value="Electro">Electro</option>
                    <option value="Cryo">Cryo</option>
                    <option value="Geo">Geo</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="label">
                  Rarity:
                  <select
                    value={selectedRarity}
                    onChange={handleRarityChange}
                    className="selection"
                  >
                    <option value="All">All</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="label">
                  Nation:
                  <select
                    value={selectedNation}
                    onChange={handleNationChange}
                    className="selection"
                  >
                    <option value="All">All</option>
                    <option value="Mondstadt">Mondstadt</option>
                    <option value="Liyue">Liyue</option>
                    <option value="Inazuma">Inazuma</option>
                  </select>
                </label>
              </div>
            </div>
          </center>

          <center>
            <div className="character-cards">
              {filteredCharacters.map((character, index) => (
                <div
                  key={index}
                  className="character-item"
                  onClick={() => {
                    scrollToElement();
                    setSearch(character.name);
                  }}
                >
                  <img
                    src={`https://api.genshin.dev/characters/${character.name}/icon`}
                    alt={character.name}
                    width="50"
                    height="50"
                  />
                  {character.name}
                </div>
              ))}
            </div>
          </center>
        </div>
      </body>
    </html>
  );
}
