import React, { useState } from "react";
import "./SubscriptionPlans.css";
import MenuCards from "./MenuCards";

const restaurants = [
  { id: 1, name: "Sridevi Tiffins" },
  { id: 2, name: "Ajantha Restaurant" },
  { id: 3, name: "Chandrika" },
  { id: 4, name: "Hello Idly" },
  { id: 5, name: "Suprabath" },
  { id: 6, name: "Abhiruchi Veg" },
];

const SubscriptionPlans = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [subscription, setSubscription] = useState(null);

  const handleRestaurantSelect = (restaurantId) => {
    if (selectedRestaurants.includes(restaurantId)) {
      setSelectedRestaurants(
        selectedRestaurants.filter((id) => id !== restaurantId)
      );
    } else if (selectedRestaurants.length < 3) {
      setSelectedRestaurants([...selectedRestaurants, restaurantId]);
    }
  };

  const handleSubscribe = (type) => {
    let accessibleRestaurants;

    switch (type) {
      case "Trial":
      case "Monthly":
        accessibleRestaurants = restaurants.map((r) => r.id.toString());
        break;
      case "Weekly":
        accessibleRestaurants = selectedRestaurants.map((id) => id.toString());
        break;
      default:
        accessibleRestaurants = [];
    }

    setSubscription({
      type,
      accessibleRestaurants,
    });
  };

  if (subscription) {
    return (
      <MenuCards
        accessibleRestaurants={subscription.accessibleRestaurants}
        subscriptionType={subscription.type}
      />
    );
  }

  return (
    <div className="subscription-container">
      <h1>Choose Your Plan</h1>
      <div className="plans-container">
        <div className="plan-card">
          <h2>Trial Pack</h2>
          <div className="price">₹70</div>
          <ul className="features">
            <li>3 Days Access</li>
            <li>Access All 6 Restaurants</li>
            <li>All Menu Items Available</li>
            <li>Basic Support</li>
            <li>Try Before You Subscribe</li>
          </ul>
          <button
            className="subscribe-btn trial"
            onClick={() => handleSubscribe("Trial")}
          >
            Subscribe Now
          </button>
        </div>

        <div className="plan-card featured">
          <h2>Weekly Plan</h2>
          <div className="price">₹170</div>
          <ul className="features">
            <li>7 Days Access</li>
            <li>Select Any 3 Restaurants</li>
            <li>Priority Support</li>
            <li>Free Delivery</li>
          </ul>
          <div className="restaurant-selection">
            <h3>Select 3 Restaurants:</h3>
            <div className="restaurant-options">
              {restaurants.map((restaurant) => (
                <label key={restaurant.id} className="restaurant-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedRestaurants.includes(restaurant.id)}
                    onChange={() => handleRestaurantSelect(restaurant.id)}
                    disabled={
                      !selectedRestaurants.includes(restaurant.id) &&
                      selectedRestaurants.length >= 3
                    }
                  />
                  {restaurant.name}
                </label>
              ))}
            </div>
          </div>
          <button
            className="subscribe-btn"
            disabled={selectedRestaurants.length !== 3}
            onClick={() => handleSubscribe("Weekly")}
          >
            {selectedRestaurants.length === 3
              ? "Subscribe Now"
              : "Select 3 Restaurants"}
          </button>
        </div>

        <div className="plan-card">
          <h2>Monthly Plan</h2>
          <div className="price">₹400</div>
          <ul className="features">
            <li>30 Days Access</li>
            <li>Access All 6 Restaurants</li>
            <li>24/7 Support</li>
            <li>Free Delivery</li>
            <li>Special Discounts</li>
          </ul>
          <button
            className="subscribe-btn premium"
            onClick={() => handleSubscribe("Monthly")}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
