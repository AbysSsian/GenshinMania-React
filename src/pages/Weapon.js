import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import icon from "../assets/icon.png";
import amosbow from "../assets/weapons/amos-bow.webp";

export default function Weapon() {
  const [goToCharacter, setGoToWeapon] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);
  const [goToWeapon, setGoToMaterial] = React.useState(false);

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

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
        <h2 className="char-archive">Weapon Archive</h2>
        <img src={amosbow}></img>
      </body>
    </html>
  );
}
