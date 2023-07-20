import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TestApp } from "../../mockComponents/TestApp";
import { describe, test } from "vitest";
import { ItemLayout } from "../../pages/Shop/ItemLayout";

describe("add to cart button", () => {
  test("adds item to cart", async () => {
    render(
      <TestApp initialEntries="/shop/leatherwatch">
        <ItemLayout />
      </TestApp>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText(/add to cart/i));

    await user.click(screen.getByRole("link", { name: "cartLink" }));
    expect(screen.getByText(/Check out/)).toBeInTheDocument();
    expect(screen.getByText(/leather watch/)).toBeInTheDocument();
  });

  test("calculates correct number of cart items", () => {
    render(<TestApp initialEntries="/checkout" />);

    expect(screen.getByTestId("cart-length")).toHaveTextContent(5);
  });
});
