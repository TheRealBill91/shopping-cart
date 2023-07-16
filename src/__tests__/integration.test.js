import {
  render,
  screen,
  waitFor,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { RouteSwitch } from "../routes/RouteSwitch";
import { App } from "../App";
import { useEffect, useState } from "react";
import { Checkout } from "../pages/Checkout/Checkout";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test("calculates correct order total", () => {
  render(
    <MemoryRouter initialEntries={["/checkout"]}>
      <TestApp />
    </MemoryRouter>
  );
  expect(screen.getByText(/total: \$1745.00/i)).toBeInTheDocument();
});

describe("checkout", () => {
  test.only("clicking checkout navigates user to thank you page", async () => {
    const user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );

    const checkoutBtn = screen.getByRole("link", { name: "Check Out" });
    await user.click(checkoutBtn);

    const thankYouMessage = screen.getByTestId("thankYouMessage");
    expect(thankYouMessage).toHaveTextContent(
      "Thank you for placing an order with Timeless"
    );

    /* screen
      .getByText(/Thank you for placing an order with Timeless/)
      .toBeInTheDocument(); */

    await waitFor(() => {
      expect(screen.getByText(/Shopping page!/i)).toBeInTheDocument();
      screen.debug();
    });
  });
});

describe("add to cart button", () => {
  test("adds cart to item", async () => {
    render(
      <MemoryRouter initialEntries={["/shop/leathertimekeeper"]}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText(/add to cart/i));

    await user.click(screen.getByRole("link", { name: "Checkout" }));
    expect(screen.getByText(/Checkout/)).toBeInTheDocument();
    expect(screen.getByText(/Leather Timekeeper/)).toBeInTheDocument();
  });

  test("calculates correct number of cart items", () => {
    render(
      <MemoryRouter>
        <TestApp />
      </MemoryRouter>
    );

    expect(screen.getByTestId("cart-length")).toHaveTextContent(5);
  });
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
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    expect(screen.getByText(/leather watch/)).toBeInTheDocument();
    await user.click(screen.getAllByRole("button", { name: "Remove" })[0]);
    expect(screen.queryByText(/leather watch/)).not.toBeInTheDocument();
  });

  test("increment button increases quanity of item in cart by 1 on each click", async () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    expect(screen.queryAllByDisplayValue(1)).toHaveLength(2);
    await user.click(screen.getAllByRole("button", { name: "+" })[0]);
    expect(screen.getAllByDisplayValue(2)).toHaveLength(1);
  });

  test("decrement button decreases quantity of item in cart by 1 on each click", async () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    expect(screen.getByDisplayValue(3)).toBeInTheDocument();
    await user.click(screen.getAllByRole("button", { name: "-" })[1]);
    expect(screen.getAllByDisplayValue(2)).toHaveLength(1);
  });

  test("decrement button removes item from cart when quanity is 1", async () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    expect(screen.getByText(/rose gold watch/)).toBeInTheDocument();
    await user.click(screen.getAllByRole("button", { name: "-" })[2]);
    expect(screen.queryByText(/rose gold watch/)).not.toBeInTheDocument();
  });

  test("user can change item quanity by typing in input field", async () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const leatherWatchInput = screen.getAllByRole("spinbutton", {
      name: "quantity-input",
    })[0];
    expect(screen.getAllByDisplayValue(1)).toHaveLength(2);
    await user.type(leatherWatchInput, "4");
    // expect(screen.getByDisplayValue(4)).toBeInTheDocument();
    expect(leatherWatchInput).toHaveValue(14);
  });
  test("user can navigate back to shop using back to shop button", async () => {
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    expect(screen.getByText(/Check out/)).toBeInTheDocument();
    const backToShopBtn = screen.getByRole("link", { name: "Back to shop" });
    await user.click(backToShopBtn);
    expect(screen.getByText(/Shopping page!/)).toBeInTheDocument();
  });
});

const TestApp = () => {
  const initialCartItems = [
    {
      id: 1,
      watchName: "leather watch",
      quantity: 1,
      price: 449,
    },
    {
      id: 2,
      watchName: "silver watch",
      quantity: 3,
      price: 299,
    },
    {
      id: 3,
      watchName: "rose gold watch",
      quantity: 1,
      price: 399,
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartTotal, setCartTotal] = useState();

  const removeWatchFromCart = (watchItem) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== watchItem.id));
  };

  const incrementCartItemQty = (cartItem) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCartItems(newCartItems);
  };

  const decrementCartItemQty = (cartItem) => {
    if (cartItem.quantity === 1) {
      const newCartItems = cartItems.filter((item) => {
        return item.id !== cartItem.id;
      });
      setCartItems(newCartItems);
      return;
    } else {
      const newCartItems = cartItems.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      setCartItems(newCartItems);
    }
  };

  const handleItemQuantityInput = (e, cartItem) => {
    const inputValue = +e.target.value;
    if (typeof inputValue !== "number") {
      console.log("must be a number");
      return;
    } else if (inputValue < 1) {
      console.log("value must be greater than 0");
      return;
    }

    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: inputValue };
      } else {
        return item;
      }
    });

    setCartItems(newCartItems);
  };

  const numberOfCartItems = () => {
    const length = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * 1,
      0
    );
    return length;
  };

  const cartLength = numberOfCartItems();

  const calculateCartTotal = () => {
    const cartTotal = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
    const roundedCartTotal = cartTotal.toFixed(2);
    setCartTotal(roundedCartTotal);
  };

  const resetShoppingCart = () => {
    setCartItems([]);
    setCartTotal();
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  return (
    <>
      <RouteSwitch
        cartItems={cartItems}
        removeWatchFromCart={removeWatchFromCart}
        incrementCartItemQty={incrementCartItemQty}
        decrementCartItemQty={decrementCartItemQty}
        handleItemQuantityInput={handleItemQuantityInput}
        cartLength={cartLength}
        cartTotal={cartTotal}
        resetShoppingCart={resetShoppingCart}
      ></RouteSwitch>
    </>
  );
};
