import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [subscriptionUsed, setSubscriptionUsed] = useState(false);

  const addToCart = (
    item,
    restaurantId,
    restaurantName,
    useSubscription = true
  ) => {
    const newItem = {
      ...item,
      restaurantId,
      restaurantName,
      isSubscriptionItem: useSubscription && !subscriptionUsed,
    };

    if (useSubscription && !subscriptionUsed) {
      setSubscriptionUsed(true);
    }

    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const removedItem = cartItems[index];
    if (removedItem.isSubscriptionItem) {
      setSubscriptionUsed(false);
    }
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setSubscriptionUsed(false);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      if (!item.isSubscriptionItem) {
        return total + item.price;
      }
      return total;
    }, 0);
  };

  const getSubscriptionItem = () => {
    return cartItems.find((item) => item.isSubscriptionItem);
  };

  const getPaidItems = () => {
    return cartItems.filter((item) => !item.isSubscriptionItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        showCart,
        setShowCart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalAmount,
        subscriptionUsed,
        getSubscriptionItem,
        getPaidItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
