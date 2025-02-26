import React from "react";
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import Restaurants from "./pages/Restaurants";
import MenuCards from "./pages/MenuCards";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route index element={<SubscriptionPlans />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="menu" element={<MenuCards />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
