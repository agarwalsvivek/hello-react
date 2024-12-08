import React, { useState, MouseEvent } from "react";
import MenuList from "../components/MenuList";
import ShoppingCart from "../components/ShoppingCart";

const PizzaShop = () => {
  const [cartItems, setItems] = useState<string[]>([]);

  const addItem = (cartItem: string) => {
    setItems([...cartItems, cartItem]);
  };
  return (
    <>
      <h1>The Code Oven</h1>
      <MenuList onAddMenuItem={addItem} />
      <ShoppingCart cartItems={cartItems} />
    </>
  );
};

export default PizzaShop;
