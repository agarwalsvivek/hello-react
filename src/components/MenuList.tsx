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
    <div>
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

export default MenuList;
