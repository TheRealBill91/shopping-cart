import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";
import { TestApp } from "../../mockComponents/TestApp";

describe("add to cart button", () => {
  test("adds item to cart", async () => {
    render(
      <MemoryRouter initialEntries={["/shop/leathertimekeeper"]}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText(/add to cart/i));

    await user.click(screen.getByRole("link", { name: "cartLink" }));
    expect(screen.getByText(/Check out/)).toBeInTheDocument();
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
