import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { RouteSwitch } from "../routes/RouteSwitch";
import { App } from "../App";
import { useEffect, useState } from "react";
import { Checkout } from "../pages/Checkout/Checkout";
import { act } from "react-dom/test-utils";

test("add to cart button adds cart to item", async () => {
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
        targetWatchItem={watchData[0]}
        cartItems={[]}
      />
    </MemoryRouter>
  );
  const user = userEvent.setup();
  await user.click(screen.getByText(/add to cart/i));

  await user.click(screen.getByRole("link", { name: "Checkout" }));
  expect(screen.getByText(/Leather Timekeeper/)).toBeInTheDocument();
});

describe("checkout tests", () => {
  test("empty cart renders empty cart message", () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <Checkout cartItems={[]} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Your cart is empty.../)).toBeInTheDocument();
  });

  const cartItems = [
    {
      id: 1,
      watchName: "leather watch",
    },
    {
      id: 2,
      watchName: "silver watch",
    },
  ];

  test("cart with items renders cart items", () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <Checkout cartItems={cartItems} />
      </MemoryRouter>
    );
    expect(screen.getByText(/leather watch/)).toBeInTheDocument();
    expect(screen.getByText(/silver watch/)).toBeInTheDocument();
  });

  test("remove button deletes item from cart", async () => {
    const cartItems = [{ id: 1, watchName: "leather watch" }];
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );

    expect(screen.getByText(/leather watch/)).toBeInTheDocument();
    await userEvent.click(screen.getAllByRole("button", { name: "Remove" })[0]);
    expect(screen.queryByText(/leather watch/)).not.toBeInTheDocument();
  });
});

function TestApp() {
  const initialCartItems = [
    {
      id: 1,
      watchName: "leather watch",
    },
    {
      id: 2,
      watchName: "silver watch",
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeWatchFromCart = (watchItem) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== watchItem.id));
  };

  return (
    <>
      <RouteSwitch
        cartItems={cartItems}
        removeWatchFromCart={removeWatchFromCart}
      ></RouteSwitch>
    </>
  );
}
