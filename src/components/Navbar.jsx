import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Food Delivery</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/cart" className="cart-link">
          Cart{" "}
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
