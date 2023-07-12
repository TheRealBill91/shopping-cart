import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { async } from "q";
import { RouteSwitch } from "../RouteSwitch";

test("navigating to unmatched route", () => {
  const unmatchedRoute = "/randomUnmatchedRoute";

  render(
    <MemoryRouter initialEntries={[unmatchedRoute]}>
      <RouteSwitch />
    </MemoryRouter>
  );

  expect(screen.getByText(/Sorry, nothing found here!/)).toBeInTheDocument();
});
