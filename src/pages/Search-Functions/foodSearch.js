import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export function FoodSearch({ search, onSearchChange }) {
  const [food, setFood] = useState([]);
  const [foodData, setFoodData] = useState(null);

  const scrollToElement = () => {
    const targetElement = document.getElementById("scroll");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Optional: Add smooth scrolling effect
      });
    }
  };

  useEffect(() => {
    axios
      .get("https://api.genshin.dev/consumables/food")
      .then((response) => {
        if (typeof response.data === "object") {
          const foodItems = Object.keys(response.data).map((key) => ({
            id: key,
            name: response.data[key].name,
            image: `https://api.genshin.dev/consumables/food/${key}`,
          }));
          setFood(foodItems); // Set the array of food objects
        } else {
          console.error("Invalid food options data:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching food options:", error);
      });
  }, []);

  useEffect(() => {
    if (search) {
      const exactMatch = food.find(
        (foodItem) =>
          foodItem.name.toLowerCase().trim() === search.toLowerCase().trim()
      );
      const partialMatch = food.find(
        (foodItem) =>
          foodItem.name.toLowerCase().startsWith(search.toLowerCase().trim()) &&
          foodItem.name.toLowerCase().trim() !== search.toLowerCase().trim()
      );
      const selectedFood = exactMatch || partialMatch;
      setFoodData(selectedFood);
    } else {
      setFoodData(null);
    }
  }, [search, food]);

  const handleImageClick = (foodName) => {
    onSearchChange({ target: { value: foodName } });
  };
  return (
    <div className="container" id="scroll">
      {/* Food selection dropdown */}
      <select className="selection" value={search} onChange={onSearchChange}>
        <option value="">Select a food</option>
        {food.map((foodItem) => (
          <option key={foodItem.id} value={foodItem.name}>
            {foodItem.name}
          </option>
        ))}
      </select>

      {/* Output food display */}
      {foodData ? (
        <div className="char-card">
          <img src={foodData.image} alt="Food" />
          <h2 className="char-name">{foodData.name}</h2>
        </div>
      ) : (
        <div className="char-card-placeholder">
          <p>Search for a food item</p>
        </div>
      )}

      {/* All food displayed */}
      <div className="character-cards">
        <div className="image-grid">
          {food.map((foodItem) => (
            <img
              key={foodItem.id}
              src={foodItem.image}
              alt={foodItem.name}
              className="food-image"
              onClick={() => {
                handleImageClick(foodItem.name);
                scrollToElement();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
