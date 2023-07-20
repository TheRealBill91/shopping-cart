import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import { RouteSwitch } from "../../../routes/RouteSwitch";

test("render Home page/navigation to shop page", async () => {
  render(<RouteSwitch />);
  const user = userEvent.setup();

  expect(
    screen.getByText(/Premium watches, engineered to perfection/)
  ).toBeInTheDocument();

  await user.click(screen.getByText(/Go to Shop/));
  expect(screen.getByText(/Shopping page!/i)).toBeInTheDocument();
});
