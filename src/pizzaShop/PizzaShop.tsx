import React, { useState, MouseEvent } from "react";
import MenuList from "../components/MenuList";
import ShoppingCart from "../components/ShoppingCart";

const pizzas = [
  "Margherita Pizza",
  "Pepperoni Pizza",
  "Veggie Supreme Pizza",
  "Chicken BBQ Pizza",
  "Spicy Meat Feast Pizza",
  "Pasta Primavera",
  "Caesar Salad",
  "Chocolate Lava Cake",
];

const PizzaShop = () => {
  const [cartItems, setItems] = useState<string[]>([]);

  const addItem = (cartItem: string) => {
    setItems([...cartItems, cartItem]);
  };
  return (
    <>
      <h1>The Code Oven</h1>
      <MenuList onAddMenuItem={addItem} pizzas={pizzas} />
      <ShoppingCart cartItems={cartItems} />
    </>
  );
};

export default PizzaShop;
