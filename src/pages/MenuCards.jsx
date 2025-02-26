import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuCards.css";
import { useCart } from "../context/CartContext";

const restaurants = [
  { id: 1, name: "Sridevi Tiffins" },
  { id: 2, name: "Ajantha Restaurant" },
  { id: 3, name: "Chandrika" },
  { id: 4, name: "Hello Idly" },
  { id: 5, name: "Suprabath" },
  { id: 6, name: "Abhiruchi Veg" },
];

const menuData = {
  1: {
    // Sridevi Tiffins
    items: [
      {
        name: "Masala Dosa",
        price: 60,
        description: "Crispy dosa with spicy potato filling",
      },
      { name: "Ghee Idly", price: 50, description: "Soft idly with ghee" },
      { name: "Mysore Bonda", price: 45, description: "Deep fried snack" },
      { name: "Vada", price: 40, description: "Crispy lentil donuts" },
      { name: "Pongal", price: 55, description: "Rice and lentil porridge" },
    ],
  },
  2: {
    // Ajantha Restaurant
    items: [
      { name: "Rava Dosa", price: 70, description: "Crispy semolina dosa" },
      {
        name: "Puri Bhaji",
        price: 65,
        description: "Puffed bread with potato curry",
      },
      {
        name: "Filter Coffee",
        price: 30,
        description: "Traditional South Indian coffee",
      },
      { name: "Upma", price: 50, description: "Semolina breakfast dish" },
    ],
  },
  3: {
    // Chandrika
    items: [
      { name: "Paper Dosa", price: 55, description: "Thin and crispy dosa" },
      {
        name: "Idly Sambar",
        price: 45,
        description: "Steamed rice cakes with lentil soup",
      },
      { name: "Vada", price: 40, description: "Crispy lentil fritters" },
      { name: "Poori", price: 50, description: "Deep fried bread with curry" },
    ],
  },
  4: {
    // Hello Idly
    items: [
      { name: "Mini Idly", price: 60, description: "Small steamed rice cakes" },
      { name: "Rava Upma", price: 45, description: "Semolina breakfast dish" },
      { name: "Onion Dosa", price: 65, description: "Dosa with onion topping" },
      { name: "Sambar Idly", price: 50, description: "Idly soaked in sambar" },
    ],
  },
  5: {
    // Suprabath
    items: [
      { name: "Pesarattu", price: 70, description: "Green gram dosa" },
      { name: "Set Dosa", price: 60, description: "Soft and spongy dosa set" },
      { name: "Uttapam", price: 65, description: "Thick dosa with toppings" },
      {
        name: "Khichdi",
        price: 55,
        description: "Rice and lentil preparation",
      },
    ],
  },
  6: {
    // Abhiruchi Veg
    items: [
      {
        name: "Ghee Pongal",
        price: 65,
        description: "Rice and lentils with ghee",
      },
      { name: "Bonda", price: 40, description: "Deep fried snack" },
      { name: "Special Dosa", price: 75, description: "House special dosa" },
      { name: "Curd Rice", price: 50, description: "Rice with yogurt" },
    ],
  },
};

const MenuCards = ({ accessibleRestaurants, subscriptionType }) => {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  const [showGoToCart, setShowGoToCart] = useState(false);

  const handleAddToCart = (item, restaurantId, restaurantName) => {
    addToCart(item, restaurantId, restaurantName);
    setShowGoToCart(true);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="menu-page">
      <h1>Restaurant Menus</h1>
      <div className="subscription-info">
        <p>Your {subscriptionType} Plan</p>
        <p className="access-period">
          {subscriptionType === "Trial" && "3 Days Access"}
          {subscriptionType === "Weekly" && "7 Days Access"}
          {subscriptionType === "Monthly" && "30 Days Access"}
        </p>
      </div>

      {showGoToCart && cartItems.length > 0 && (
        <div className="go-to-cart-banner">
          <p>{cartItems.length} item(s) in cart</p>
          <button className="go-to-cart-btn" onClick={handleGoToCart}>
            Go to Cart
          </button>
        </div>
      )}

      <div className="menu-cards-container">
        {accessibleRestaurants.map((restaurantId) => {
          const restaurant = restaurants.find(
            (r) => r.id === parseInt(restaurantId)
          );
          const menu = menuData[restaurantId];

          return (
            <div key={restaurantId} className="restaurant-menu-card">
              <h2>{restaurant.name}</h2>
              <div className="menu-items-grid">
                {menu.items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <p className="price">₹{item.price}</p>
                    <button
                      className="order-btn"
                      onClick={() =>
                        handleAddToCart(item, restaurant.id, restaurant.name)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCards;
