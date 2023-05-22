import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function ArtifactSearch({ search, onSearchChange }) {
  const [artifact, setartifact] = useState([]);
  const [artifactsData, setartifactsData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch for selection option
  useEffect(() => {
    axios
      .get("https://api.genshin.dev/artifacts")
      .then((response) => {
        // Filter out artifacts that contain "prayers" in their name
        const filteredArtifacts = response.data.filter(
          (artifact) =>
            !artifact.toLowerCase().includes("prayers") &&
            !artifact.toLowerCase().includes("snowfield")
        );
        setartifact(filteredArtifacts);
      })
      .catch((error) => {
        console.error("Error fetching artifact:", error);
      });
  }, []);

  // Fetch character berdasarkan search val
  useEffect(() => {
    if (search) {
      axios
        .get(`https://api.genshin.dev/artifacts/${search}`)
        .then((response) => {
          setartifactsData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching artifact data:", error);
        });
    }
  }, [search]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageUrl = () => {
    if (isHovered) {
      return `https://api.genshin.dev/artifacts/${search}/plume-of-death`;
    } else {
      return `https://api.genshin.dev/artifacts/${search}/flower-of-life`;
    }
  };

  return (
    <div className="container">
      {/* Artifact selection */}
      <select className="selection" value={search} onChange={onSearchChange}>
        <option value="">Select an artifact</option>
        {artifact.map((artifact) => (
          <option key={artifact} value={artifact}>
            {artifact}
          </option>
        ))}
      </select>

      {/* Character Information */}
      {artifactsData && (
        <div className="char-card">
          <h2 className="char-name">{artifactsData.name}</h2>
          <img
            src={getImageUrl()}
            alt="Character Portrait"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          <p>Max rarity: {artifactsData.max_rarity}</p>
          <p>2 Pieces Bonus: {artifactsData["2-piece_bonus"]}</p>
          <p>4 Pieces Bonus: {artifactsData["4-piece_bonus"]}</p>
        </div>
      )}
    </div>
  );
}
