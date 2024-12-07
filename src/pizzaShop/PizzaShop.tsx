import React, { useState, MouseEvent } from "react";
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

type MenuListType = {
  onAddMenuItem: (item: string) => void;
};

const MenuList = ({ onAddMenuItem }: MenuListType) => {
  return (
    <div data-testid="menu-list">
      <ol>
        {pizzas.map((pizza, index) => (
          <li key={index}>
            {pizza}{" "}
            <button
              onClick={() => {
                onAddMenuItem(pizza);
              }}
            >
              Add
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const ShoppingCart = ({ cartItems }: { cartItems: string[] }) => {
  return (
    <div data-testid="shopping-cart">
      <ol>
        {cartItems.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ol>
      <button disabled={cartItems.length == 0}>Place My Order</button>
    </div>
  );
};

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
