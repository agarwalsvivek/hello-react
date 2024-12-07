import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PizzaShop from "./pizzaShop/PizzaShop";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <PizzaShop />
  </StrictMode>
);
