import React from "react";
import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.getItem("token");

    setIsLoggedin(true);
  };
  const cartContext = {
    token: userIsLoggedIn,
    isLoggedin: isLoggedin,
    login: loginHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
