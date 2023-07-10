/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Home } from "../Home";
import { App } from "../../../App";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { RouteSwitch } from "../../../routes/RouteSwitch";

test("render Home page/navigation to shop page", async () => {
  render(<RouteSwitch />, { wrapper: MemoryRouter });
  const user = userEvent.setup();

  expect(
    screen.getByText(/Premium watches, engineered to perfection/)
  ).toBeInTheDocument();

  await user.click(screen.getByText(/Go to Shop/));
  expect(screen.getByText(/Shopping page!/i)).toBeInTheDocument();
});
