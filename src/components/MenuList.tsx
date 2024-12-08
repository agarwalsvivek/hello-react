import React from "react";
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
    <ol>
      {pizzas.map((pizza, index) => (
        <li
          key={index}
          onClick={() => {
            onAddMenuItem(pizza);
          }}
        >
          {pizza}{" "}
        </li>
      ))}
    </ol>
  );
};

export default MenuList;
