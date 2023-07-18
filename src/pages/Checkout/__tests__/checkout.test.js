import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { TestApp } from "../../../mockComponents/TestApp";
import { act } from "react-dom/test-utils";
import { Checkout } from "../Checkout";

test("calculates correct order total", () => {
  render(
    <MemoryRouter initialEntries={["/checkout"]}>
      <TestApp />
    </MemoryRouter>
  );
  expect(screen.getByText(/total: \$1745.00/i)).toBeInTheDocument();
});

describe("checkout process", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test("clicking checkout navigates user to thank you page", async () => {
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersByTime(),
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

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    await waitFor(() => {
      expect(thankYouMessage).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Shopping page!/i)).toBeInTheDocument();
    });
  });

  test("clicking checkout button clears the cart total & cartItems state", async () => {
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersByTime(),
    });
    render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <TestApp />
      </MemoryRouter>
    );

    const checkoutBtn = screen.getByRole("link", { name: "Check Out" });
    await user.click(checkoutBtn);
    const cartNavLink = screen.getByRole("link", { name: "cartLink" });
    await user.click(cartNavLink);
    expect(screen.getByText(/Your cart is empty.../)).toBeInTheDocument();
  });
  test("rendering of thank you page redirects to shop page after 3 seconds", async () => {
    render(
      <MemoryRouter initialEntries={["/thankyou"]}>
        <TestApp />
      </MemoryRouter>
    );

    const thankYouMessage = screen.getByTestId("thankYouMessage");
    expect(thankYouMessage).toHaveTextContent(
      "Thank you for placing an order with Timeless"
    );
    jest.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(screen.getByText(/Shopping page!/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(thankYouMessage).not.toBeInTheDocument();
    });
  });
});

describe("checkout page", () => {
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
