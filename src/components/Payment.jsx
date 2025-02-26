import React, { useState } from "react";
import "./Payment.css";

const Payment = ({ amount, onSuccess, onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div className="payment-amount">
        <h3>Total Amount: ₹{amount}</h3>
      </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        {paymentMethod === "card" && (
          <>
            <div className="form-group">
              <input
                type="text"
                placeholder="Card Number"
                required
                pattern="[0-9]{16}"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="MM/YY"
                required
                pattern="[0-9]{2}/[0-9]{2}"
              />
              <input
                type="text"
                placeholder="CVV"
                required
                pattern="[0-9]{3}"
              />
            </div>
          </>
        )}

        {paymentMethod === "upi" && (
          <div className="form-group">
            <input type="text" placeholder="UPI ID" required />
          </div>
        )}

        {paymentMethod === "cod" && (
          <div className="cod-info">
            <p>
              <i className="cod-icon">💵</i>
              Pay ₹{amount} in cash at the time of delivery
            </p>
            <div className="cod-note">
              <p>Please keep exact change ready</p>
              <p>Additional delivery charge of ₹5 applies for COD</p>
            </div>
          </div>
        )}

        <div className="payment-buttons">
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="pay-btn" disabled={loading}>
            {loading
              ? "Processing..."
              : paymentMethod === "cod"
              ? "Confirm Order"
              : `Pay ₹${amount}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
