import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import icon from "../assets/icon.png";
import WeaponSearch from "./Search-Functions/weaponSearch";
import weaponsData from "./Search-Functions/weaponsData";
import backgroundMusic from "../assets/menu.mp3";
import audioIcon from "../assets/audio-icon.png";

export default function Weapon() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [goToCharacter, setGoToCharacter] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);

  const [goToFood, setGoToFood] = React.useState(false);
  const [goToMenu, setGoToMenu] = React.useState(false);

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

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  if (goToArtifact) {
    return <Navigate to="/Artifact" />;
  }

  if (goToFood) {
    return <Navigate to="/Food" />;
  }

  if (goToMenu) {
    return <Navigate to="/Menu" />;
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleRarityChange = (event) => {
    setSelectedRarity(event.target.value);
  };

  const filteredWeapons = weaponsData.filter((weapon) => {
    const isTypeMatch = selectedType === "All" || weapon.type === selectedType;
    const isRarityMatch =
      selectedRarity === "All" || weapon.rarity === parseInt(selectedRarity);

    return isTypeMatch && isRarityMatch;
  });

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>GenshinMania</title>
      </head>
      <body>
        <div className="audio">
          <audio src={backgroundMusic} autoPlay loop />
        </div>
        <nav className="nav">
          <div
            className="site-title"
            onClick={() => {
              setGoToMenu(true);
            }}
          >
            GenshinMania
          </div>
          <img src={icon} className="icon" />
          <div className="nav-elements">
            <span className="scroll-elements" onClick={toggleMusic}>
              <img src={audioIcon} alt="audio" />
            </span>
          </div>
        </nav>

        <div className="sections">
          <div className="button-group">
            <button
              onClick={() => {
                setGoToCharacter(true);
              }}
            >
              Characters
            </button>
            <button>Weapons</button>
            <button
              onClick={() => {
                setGoToArtifact(true);
              }}
            >
              Artifacts
            </button>
            <button
              onClick={() => {
                setGoToFood(true);
              }}
            >
              Food
            </button>
          </div>
        </div>
        <h2 className="char-archive">Weapon Archive</h2>
        <div className="App">
          <div className="search-character" id="scroll">
            Search
          </div>
          <div>
            <input
              type="text"
              placeholder="Search weapons"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <WeaponSearch search={search} onSearchChange={handleSearchChange} />
        </div>
        <div>
          <div>
            <center>
              <div>
                <label htmlFor="type-select" className="label">
                  Type:
                </label>
                <select
                  id="type-select"
                  value={selectedType}
                  onChange={handleTypeChange}
                  className="selection"
                >
                  <option value="All">All</option>
                  <option value="Sword">Sword</option>
                  <option value="Bow">Bow</option>
                  <option value="Claymore">Claymore</option>
                  {/* Add more weapon types here */}
                </select>

                <label htmlFor="rarity-select" className="label">
                  Rarity:
                </label>
                <select
                  id="rarity-select"
                  value={selectedRarity}
                  onChange={handleRarityChange}
                  className="selection"
                >
                  <option value="All">All</option>
                  <option value="3">3-Star</option>
                  <option value="4">4-Star</option>
                  <option value="5">5-Star</option>
                </select>
              </div>
            </center>
          </div>
          <div className="weapon-cards">
            {filteredWeapons.map((weapon, index) => (
              <div
                key={index}
                className="weapon-item"
                onClick={() => {
                  scrollToElement();
                  setSearch(weapon.name);
                }}
              >
                <img
                  src={require(`../../public/weapons/${weapon.name}.webp`)}
                  width="50"
                  height="50"
                />
                {weapon.name}
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
