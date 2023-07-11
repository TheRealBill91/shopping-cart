import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Header } from "../Header";
import { Shop } from "../../pages/Shop/Shop";
import { RouteSwitch } from "../../routes/RouteSwitch";

test("render header text logo", () => {
  render(<Header />, { wrapper: MemoryRouter });

  expect(screen.getByText(/timeless/i)).toBeInTheDocument();
});

test("navigate to home page with text logo", async () => {
  render(
    <MemoryRouter initialEntries={["/shop"]}>
      <RouteSwitch />
    </MemoryRouter>
  );
  const user = userEvent.setup();

  expect(
    screen.queryByText(/premium watches, engineered to perfection/i)
  ).not.toBeInTheDocument();

  await user.click(screen.getByText(/timeless/i));
  expect(
    screen.getByText(/Premium watches, engineered to perfection/s)
  ).toBeInTheDocument();
});
