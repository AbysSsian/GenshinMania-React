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
        <option value="">Select a character</option>
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
          <img
            src={`https://api.genshin.dev/characters/${search}/card`}
            alt="Character Card"
          />

          <p>Title: {characterData.title}</p>
          <p>Rarity: {characterData.rarity}*</p>
          <p>Vision: {characterData.vision}</p>
          <p>Weapon: {characterData.weapon}</p>
          <p>Nation: {characterData.nation}</p>
          <p>Description: {characterData.description}</p>
        </div>
      )}
    </div>
  );
}
