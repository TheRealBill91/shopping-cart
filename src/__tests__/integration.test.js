import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { RouteSwitch } from "../routes/RouteSwitch";
import { App } from "../App";
import { useState } from "react";

const addWatchToCart = jest.fn();

// not adding cart to item
test("add to cart button adds cart to item", async () => {
  const [cartItems, setCartItems] = useState([]);
  const addWatchToCart = jest.fn((item) => setCartItems([...cartItems, item]));
  const watchData = [
    {
      id: "1",
      watchName: "Leather Timekeeper",
      imgDescription: "leather timekeeper image description",
      price: 449,
    },
  ];
  render(
    <MemoryRouter initialEntries={["/shop/leathertimekeeper"]}>
      <App
        cartLength={0}
        watchData={watchData}
        addWatchToCart={addWatchToCart}
        targetWatchItem={watchData[0]}
        cartItems={[]}
      />
    </MemoryRouter>
  );
  const user = userEvent.setup();
  await user.click(screen.getByText(/add to cart/i));
  screen.debug();
  await user.click(screen.getByRole("link", { name: "Checkout" }));
  expect(addWatchToCart).toHaveBeenCalledWith(watchData[0]);
});
