import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import ArtifactSearch from "./Search-Functions/artifactSearch";
import icon from "../assets/icon.png";

export default function Artifact() {
  const [goToCharacter, setGoToCharacter] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);
  const [goToWeapon, setGoToWeapon] = React.useState(false);

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  if (goToWeapon) {
    return <Navigate to="/Weapon" />;
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
            <button>Material</button>
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
