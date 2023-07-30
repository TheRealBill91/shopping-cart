import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../Header";
import { TestApp } from "../../mockComponents/TestApp";
import { test, expect } from "vitest";

test("render header text logo", () => {
  render(<Header />, { wrapper: MemoryRouter });

  expect(screen.getByText(/timeless/i)).toBeInTheDocument();
});

test("navigate to home page with text logo", async () => {
  render(<TestApp initialEntries="/shop" />);
  const user = userEvent.setup();

  expect(
    screen.queryByText(/premium watches, engineered to perfection/i)
  ).not.toBeInTheDocument();

  await user.click(screen.getByText(/timeless/i));
  expect(
    screen.getByText(/Premium watches, engineered to perfection/s)
  ).toBeInTheDocument();
});
