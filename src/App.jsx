// App.jsx
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home.jsx";
import Sardor from "./Components/Sardor";
import Checkout from "./Components/Checkout";
import Wishlist from "./Components/Wishlist";
import NotFound from "./Components/NotFound";
import Cart from "./Components/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

const Layout = ({ wishlist, setWishlist, cart, setCart }) => {
  return (
    <>
      <Header wishlistCount={wishlist.length} cartCount={cart.length} />
      <Outlet context={{ wishlist, setWishlist, cart, setCart }} />
    </>
  );
};

const App = () => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter([
    {
      element: <Layout wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Sardor /> },
        { path: "/checkout/:id", element: <Checkout /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "*", element: <NotFound /> },
        {path: "/cart", element: <Cart /> },
            {
      path: "/login",
      element: <Login />
    },
    {path: "/register", element: <Register />}
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
