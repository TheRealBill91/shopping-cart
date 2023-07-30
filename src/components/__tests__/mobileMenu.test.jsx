import { mediaQuery } from "css-mediaquery";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../Header";
import { test } from "vitest";
import "@testing-library/jest-dom";

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

test("mobile menu button is visible", () => {
  window.matchMedia = createMatchMedia(812);

  render(<Header />, { wrapper: MemoryRouter });
  const mobileMenuToggleBtn = screen.getByRole("button", {
    name: "mobile menu button toggle",
  });
  expect(mobileMenuToggleBtn).toBeInTheDocument();
});

test("clicking mobile menu button opens mobile menu", async () => {
  window.matchMedia = createMatchMedia(812);
  const user = userEvent.setup();

  render(<Header />, { wrapper: MemoryRouter });
  const mobileMenuToggleBtn = screen.getByRole("button", {
    name: "mobile menu button toggle",
  });
  await user.click(mobileMenuToggleBtn);
  const mobileMenuUL = screen.getByTestId("mobileMenuUL");
  expect(mobileMenuUL).toBeInTheDocument();
});
