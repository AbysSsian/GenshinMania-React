import React, { useState, useRef } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import ArtifactSearch from "./Search-Functions/artifactSearch";
import icon from "../assets/icon.png";
import backgroundMusic from "../assets/menu.mp3";
import audioIcon from "../assets/audio-icon.png";

export default function Artifact() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [goToCharacter, setGoToCharacter] = React.useState(false);

  const [goToWeapon, setGoToWeapon] = React.useState(false);
  const [goToFood, setGoToFood] = React.useState(false);
  const [goToMenu, setGoToMenu] = React.useState(false);
  const [search, setSearch] = useState("");
  const audioRef = useRef(null);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  if (goToWeapon) {
    return <Navigate to="/Weapon" />;
  }

  if (goToFood) {
    return <Navigate to="/Food" />;
  }

  if (goToMenu) {
    return <Navigate to="/Menu" />;
  }

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>GenshinMania</title>
      </head>
      <body>
        <audio ref={audioRef} src={backgroundMusic} />
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
            <span className="scroll-elements" onClick={togglePlay}>
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
            <button
              onClick={() => {
                setGoToWeapon(true);
              }}
            >
              Weapons
            </button>
            <button>Artifacts</button>
            <button
              onClick={() => {
                setGoToFood(true);
              }}
            >
              Food
            </button>
          </div>
        </div>
        <h2 className="char-archive">Artifact Archive</h2>
        <div className="App">
          <h1>Search</h1>
          <div>
            <input
              type="text"
              placeholder="Search artifact"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <ArtifactSearch search={search} onSearchChange={handleSearchChange} />
        </div>

        <div className="character-cards"></div>
      </body>
    </html>
  );
}
