import React from "react";

type MenuListType = {
  onAddMenuItem: (item: string) => void;
  pizzas: string[];
};

const MenuList = ({ onAddMenuItem, pizzas }: MenuListType) => {
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
