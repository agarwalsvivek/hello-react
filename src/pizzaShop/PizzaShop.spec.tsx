import {
  getByRole,
  getByText,
  render,
  screen,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import PizzaShop from "./PizzaShop";
//import "@testing-library/jest-dom/extend-expect";

test("renders Hello World", async () => {
  render(<PizzaShop />);
  const helloWorldElement = screen.getByText("The Code Oven");
  expect(helloWorldElement).toBeInTheDocument();

  const menuList = screen.getAllByRole("list")[0];
  const menuItems = within(menuList).getAllByRole("listitem");

  expect(menuItems.length).toEqual(8);

  expect(
    within(menuItems[0]).getByText("Margherita Pizza")
  ).toBeInTheDocument();

  const shopingCartContainer = screen.getByTestId("shopping-cart");

  const placeOrderButton = within(shopingCartContainer).getByRole("button");

  expect(placeOrderButton).toBeInTheDocument();
  expect(placeOrderButton).toHaveTextContent("Place My Order");
  expect(placeOrderButton).toBeDisabled();

  const addButton = within(menuItems[0]).getByRole("button");
  await userEvent.click(addButton);

  userEvent.click(placeOrderButton);
  expect(placeOrderButton).toBeEnabled();
});
