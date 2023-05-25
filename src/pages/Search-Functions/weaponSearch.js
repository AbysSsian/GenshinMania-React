import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function WeaponSearch({ search, onSearchChange }) {
  const [weapons, setWeapons] = useState([]);
  const [weaponData, setWeaponData] = useState(null);

  const imagePath = `./weapons/${search}.webp`;

  // Fetch for selection option
  useEffect(() => {
    axios
      .get("https://api.genshin.dev/weapons")
      .then((response) => {
        setWeapons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weapons:", error);
      });
  }, []);

  // Fetch character berdasarkan search val
  useEffect(() => {
    if (search) {
      axios
        .get(`https://api.genshin.dev/weapons/${search}`)
        .then((response) => {
          setWeaponData(response.data);
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
        <option value="">All Weapons</option>
        {weapons.map((character) => (
          <option key={character} value={character}>
            {character}
          </option>
        ))}
      </select>

      {/*Character Information */}
      {weaponData && (
        <div className="char-card">
          <h2 className="char-name">{weaponData.name}</h2>
          <img src={imagePath} alt="Weapon" />

          <p>Type: {weaponData.type}</p>
          <p>Rarity: {weaponData.rarity}</p>
          <p>Base Attack: {weaponData.baseAttack}</p>
          <p>Sub Status: {weaponData.subStat}</p>
          <p>Location: {weaponData.location}</p>
          <p>Description: {weaponData.passiveDesc}</p>
        </div>
      )}
    </div>
  );
}
