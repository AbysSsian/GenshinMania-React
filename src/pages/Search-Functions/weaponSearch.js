import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default function WeaponSearch({ search, onSearchChange }) {
  const [weapons, setWeapons] = useState([]);
  const [weaponData, setWeaponData] = useState(null);

  //const imagePath = `./weapons/${search}.webp`;

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
        <option value="">All weapons</option>
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
          <div class="image-container">
            <img
              src={require(`../../../public/weapons/${search}.webp`)}
              alt="Weapon"
            />

            <p>
              Type: {weaponData.type}
              <br />
              <br />
              Rarity: {weaponData.rarity}
              <br />
              <br />
              Base Attack: {weaponData.baseAttack}
              <br />
              <br />
              Sub Status: {weaponData.subStat}
              <br />
              <br />
              Location: {weaponData.location}
              <br />
              <br />
              Description: {weaponData.passiveDesc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
