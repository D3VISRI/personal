import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import DeliveryAddress from "./DeliveryAddress";
import Payment from "./Payment";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    getTotalAmount,
    clearCart,
    getSubscriptionItem,
    getPaidItems,
  } = useCart();

  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subscriptionItem = getSubscriptionItem();
  const paidItems = getPaidItems();
  const totalAmount = getTotalAmount();

  const handleProceedToDelivery = () => {
    if (paidItems.length > 0 && !showPayment) {
      setShowPayment(true);
    } else {
      setShowDeliveryForm(true);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setShowDeliveryForm(true);
  };

  const handleOrderComplete = () => {
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="cart-container">
        <div className="order-success">
          <h2>Order Placed Successfully! 🎉</h2>
          <p>Your food will be delivered soon.</p>
          <button
            onClick={() => window.location.reload()}
            className="continue-btn"
          >
            Place New Order
          </button>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <Payment
        amount={totalAmount}
        onSuccess={handlePaymentSuccess}
        onCancel={() => setShowPayment(false)}
      />
    );
  }

  if (showDeliveryForm) {
    return (
      <DeliveryAddress
        onBack={() => setShowDeliveryForm(false)}
        onComplete={handleOrderComplete}
        totalAmount={totalAmount}
      />
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {subscriptionItem && (
            <div className="subscription-item">
              <h3>Subscription Order (Free)</h3>
              <div className="cart-item subscription">
                <div className="item-info">
                  <h4>{subscriptionItem.name}</h4>
                  <p className="restaurant-name">
                    {subscriptionItem.restaurantName}
                  </p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(cartItems.indexOf(subscriptionItem))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          )}

          {paidItems.length > 0 && (
            <div className="paid-items">
              <h3>Additional Items (Paid)</h3>
              {paidItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p className="restaurant-name">{item.restaurantName}</p>
                    <p className="price">₹{item.price}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(cartItems.indexOf(item))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="cart-summary">
            {totalAmount > 0 && (
              <div className="total">
                <span>Total Amount for Additional Items:</span>
                <span>₹{totalAmount}</span>
              </div>
            )}
            <button className="proceed-btn" onClick={handleProceedToDelivery}>
              {paidItems.length > 0
                ? "Proceed to Payment"
                : "Proceed to Delivery"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
