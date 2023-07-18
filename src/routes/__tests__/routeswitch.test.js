import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
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
