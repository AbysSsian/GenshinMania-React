import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function ArtifactSearch({ search, onSearchChange }) {
  const [artifacts, setArtifacts] = useState([]);
  const [artifactData, setArtifactData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToElement = () => {
    const targetElement = document.getElementById("scroll");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  // Fetch for selection option
  useEffect(() => {
    axios
      .get("https://api.genshin.dev/artifacts")
      .then((response) => {
        // Filter out artifacts that contain "prayers" or "snowfield" in their name
        const filteredArtifacts = response.data.filter(
          (artifact) =>
            !artifact.toLowerCase().includes("prayers") &&
            !artifact.toLowerCase().includes("snowfield")
        );
        setArtifacts(filteredArtifacts);
      })
      .catch((error) => {
        console.error("Error fetching artifacts:", error);
      });
  }, []);

  // Fetch artifact based on search value
  useEffect(() => {
    if (search) {
      axios
        .get(`https://api.genshin.dev/artifacts/${search}`)
        .then((response) => {
          setArtifactData(response.data);
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

  const getImageUrl = (artifact) => {
    if (isHovered) {
      return `https://api.genshin.dev/artifacts/${artifact}/plume-of-death`;
    } else {
      return `https://api.genshin.dev/artifacts/${artifact}/flower-of-life`;
    }
  };

  const handleArtifactClick = (artifact) => {
    onSearchChange({ target: { value: artifact } });
  };

  return (
    <div className="container" id="scroll">
      {/* Artifact selection */}
      <select className="selection" value={search} onChange={onSearchChange}>
        <option value="">All Artifacts</option>
        {artifacts.map((artifact) => (
          <option key={artifact} value={artifact}>
            {artifact}
          </option>
        ))}
      </select>

      {/* Artifact Information */}
      {artifactData && (
        <div className="char-card">
          <h2 className="char-name">{artifactData.name}</h2>
          <img
            src={getImageUrl(search)}
            alt="Artifact Portrait"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          <p>Max rarity: {artifactData.max_rarity}*</p>
          <p>2 Pieces Bonus: {artifactData["2-piece_bonus"]}</p>
          <p>4 Pieces Bonus: {artifactData["4-piece_bonus"]}</p>
        </div>
      )}

      {/* Show all artifacts */}
      <div className="character-cards">
        <div className="artifact-grid">
          {artifacts.map((artifact) => (
            <img
              key={artifact}
              src={getImageUrl(artifact)}
              alt={artifact}
              onClick={() => {
                handleArtifactClick(artifact);
                scrollToElement();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
