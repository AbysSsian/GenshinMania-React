import React, { useState } from "react";
import charactersData from "./charactersData";

const CharacterFilterApp = () => {
  const [selectedElement, setSelectedElement] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [selectedNation, setSelectedNation] = useState("All");
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
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
    <div>
      <h1>Genshin Impact Character Filter</h1>

      <div>
        <label>
          Element:
          <select value={selectedElement} onChange={handleElementChange}>
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
        <label>
          Rarity:
          <select value={selectedRarity} onChange={handleRarityChange}>
            <option value="All">All</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Nation:
          <select value={selectedNation} onChange={handleNationChange}>
            <option value="All">All</option>
            <option value="Mondstadt">Mondstadt</option>
            <option value="Liyue">Liyue</option>
            <option value="Inazuma">Inazuma</option>
          </select>
        </label>
      </div>

      <h2>Filtered Characters:</h2>
      <ul>
        {filteredCharacters.map((character, index) => (
          <li key={index} onClick={() => handleCharacterClick(character.name)}>
            <img
              src={`https://api.genshin.dev/characters/${character.name}/icon`}
              alt={character.name}
              width="50"
              height="50"
            />
          </li>
        ))}
      </ul>
      <h2>Selected Character:</h2>
      <input type="text" value={selectedCharacter} readOnly />
    </div>
  );
};

export default CharacterFilterApp;
