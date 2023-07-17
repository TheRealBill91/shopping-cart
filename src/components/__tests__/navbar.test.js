import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "../NavBar";
import { RouteSwitch } from "../../routes/RouteSwitch";
import { App } from "../../App";
import { createMemoryHistory } from "@remix-run/router";
import { Router } from "react-router-dom";

const cartLength = 3;

test("renders the correct number of items in cart on screen", () => {
  render(<NavBar cartLength={cartLength} />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("cart-length")).toBeInTheDocument(3);
});

test("navigate to home page with home link", async () => {
  render(
    <MemoryRouter initialEntries={["/shop"]}>
      <RouteSwitch />
    </MemoryRouter>
  );

  const user = userEvent.setup();
  expect(
    screen.queryByText(/premium watches, engineered to perfection/i)
  ).not.toBeInTheDocument();

  await user.click(screen.getByText(/Home/));
  expect(
    screen.getByText(/Premium watches, engineered to perfection/s)
  ).toBeInTheDocument();
});

test("navigate to shop page using shop link in nav bar", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <RouteSwitch />
    </MemoryRouter>
  );

  const user = userEvent.setup();

  expect(
    screen.queryByRole("h2", { value: "Shopping page!" })
  ).not.toBeInTheDocument();
  await user.click(screen.getByRole("link", { name: "Shop" }));
  expect(screen.getByText(/Shopping page!/)).toBeInTheDocument();
});

test("navigate to checkout page using cartNav link", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const user = userEvent.setup();
  expect(
    screen.getByText(/Premium watches, engineered to perfection/)
  ).toBeInTheDocument();
  await user.click(screen.getByRole("link", { name: "cartLink" }));
  expect(
    screen.queryByText(/Premium watches, engineered to perfection/)
  ).not.toBeInTheDocument();
  expect(screen.getByText("Your cart is empty...")).toBeInTheDocument();
});
