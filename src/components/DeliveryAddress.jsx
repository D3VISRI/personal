import React, { useState } from "react";
import "./DeliveryAddress.css";

const DeliveryAddress = ({ onBack, onComplete, totalAmount }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="delivery-container">
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit} className="delivery-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="landmark"
            placeholder="Landmark (Optional)"
            value={formData.landmark}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="order-summary">
          <p>Total Amount: ₹{totalAmount}</p>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={onBack} className="back-btn">
            Back to Cart
          </button>
          <button type="submit" className="confirm-btn">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryAddress;
