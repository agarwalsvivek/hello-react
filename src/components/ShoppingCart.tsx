import React from "react";

const ShoppingCart = ({ cartItems }: { cartItems: string[] }) => {
  return (
    <div data-testid="shopping-cart" className="bordered-div">
      <span className="bordered-div-label">Cart Items</span>
      <ol>
        {cartItems.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ol>
      <button disabled={cartItems.length == 0}>Place My Order</button>
    </div>
  );
};

export default ShoppingCart;
