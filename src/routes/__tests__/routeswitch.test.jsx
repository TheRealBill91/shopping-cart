import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test } from "vitest";
import { TestApp } from "../../mockComponents/TestApp";

test("navigating to unmatched route", () => {
  const unmatchedRoute = "/randomUnmatchedRoute";

  render(<TestApp initialEntries={unmatchedRoute} />);

  expect(
    screen.getByText(/Looks like we ran into an issue!/)
  ).toBeInTheDocument();
});
