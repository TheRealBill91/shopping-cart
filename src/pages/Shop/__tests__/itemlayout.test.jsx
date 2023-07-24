import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ItemLayout } from "../ItemLayout";
import { ShopContext } from "../../../context/ShopContext";
import { expect, test } from "vitest";
import { TestApp } from "../../../mockComponents/TestApp";
import { Shop } from "../Shop";

test("navigate to shop item child route", async () => {
  const user = userEvent.setup();

  render(<TestApp initialEntries="/shop"></TestApp>);

  await user.click(screen.getByRole("link", { name: "leather watch $449" }));
  expect(
    screen.queryByText(/rose gold watch image description/)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(/silver watch image description/)
  ).not.toBeInTheDocument();
  expect(
    screen.getByText(/leather watch image description/)
  ).toBeInTheDocument();
});

test("item layout renders the correct number of item preview cards", () => {
  const watchData = [
    {
      id: "1",
      watchName: "Leather Timekeeper",
      styles: "styles",
    },
    {
      id: "2",
      watchName: "Blue Horizon",
    },
    {
      id: "3",
      watchName: "Woodland",
    },
  ];

  render(
    <MemoryRouter>
      <ShopContext.Provider value={{ watchData }}>
        <Shop />
      </ShopContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByText(/Blue Horizon/)).toBeInTheDocument();
  expect(screen.getByText(/Leather Timekeeper/)).toBeInTheDocument();
  expect(screen.getByText(/Woodland/)).toBeInTheDocument();
});
