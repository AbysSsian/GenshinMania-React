import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function CharacterSearch({ search, onSearchChange }) {
  const [characters, setCharacters] = useState([]);
  const [characterData, setCharacterData] = useState(null);

  // Fetch for selection option
  useEffect(() => {
    axios
      .get("https://api.genshin.dev/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  // Fetch character berdasarkan search val
  useEffect(() => {
    if (search) {
      axios
        .get(`https://api.genshin.dev/characters/${search}`)
        .then((response) => {
          setCharacterData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching character data:", error);
        });
    }
  }, [search]);

  return (
    <div className="container">
      {/* Character selection */}
      <select className="selection" value={search} onChange={onSearchChange}>
        <option value="">All Characters</option>
        {characters.map((character) => (
          <option key={character} value={character}>
            {character}
          </option>
        ))}
      </select>

      {/*Character Information */}
      {characterData && (
        <div className="char-card">
          <h2 className="char-name">{characterData.name}</h2>
          <div class="image-container">
            <img
              src={`https://api.genshin.dev/characters/${search}/card`}
              alt="Character Card"
            />

            <p>
              Title: {characterData.title}
              <br />
              <br />
              Rarity: {characterData.rarity}*
              <br />
              <br />
              Vision: {characterData.vision}
              <br />
              <br />
              Weapon: {characterData.weapon}
              <br />
              <br />
              Nation: {characterData.nation}
              <br />
              <br />
              Description: {characterData.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
