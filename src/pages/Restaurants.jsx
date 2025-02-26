import React from "react";
import "./Restaurants.css";

const restaurants = [
  {
    id: 1,
    name: "Sridevi Tiffins",
    rating: 4.5,
    items: ["Masala Dosa", "Ghee Idly", "Mysore Bonda"],
    image: "https://images.unsplash.com/photo-1630400590701-1c9527f7c4c4?w=500",
    speciality: "Famous for South Indian Breakfast",
  },
  {
    id: 2,
    name: "Ajantha Restaurant",
    rating: 4.3,
    items: ["Rava Dosa", "Puri Bhaji", "Filter Coffee"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500",
    speciality: "Traditional South Indian Cuisine",
  },
  {
    id: 3,
    name: "Chandrika",
    rating: 4.4,
    items: ["Paper Dosa", "Idly Sambar", "Vada"],
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500",
    speciality: "Authentic Andhra Style",
  },
  {
    id: 4,
    name: "Hello Idly",
    rating: 4.2,
    items: ["Mini Idly", "Rava Upma", "Onion Dosa"],
    image: "https://images.unsplash.com/photo-1630400590701-1c9527f7c4c4?w=500",
    speciality: "Idly Varieties",
  },
  {
    id: 5,
    name: "Suprabath",
    rating: 4.6,
    items: ["Pesarattu", "Set Dosa", "Uttapam"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500",
    speciality: "Healthy Breakfast Options",
  },
  {
    id: 6,
    name: "Abhiruchi Veg",
    rating: 4.4,
    items: ["Ghee Pongal", "Bonda", "Special Dosa"],
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500",
    speciality: "Pure Vegetarian",
  },
];

const Restaurants = () => {
  return (
    <div className="restaurants-container">
      <h1>Popular Restaurants</h1>
      <div className="restaurants-grid">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-image">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="rating">★ {restaurant.rating}</div>
            </div>
            <div className="restaurant-info">
              <h2>{restaurant.name}</h2>
              <p className="speciality">{restaurant.speciality}</p>
              <div className="menu-items">
                <h3>Popular Items:</h3>
                <ul>
                  {restaurant.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <button className="order-btn">View Menu</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
