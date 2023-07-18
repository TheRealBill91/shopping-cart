import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { RouteSwitch } from "../../../routes/RouteSwitch";
import { ItemLayout } from "../ItemLayout";

beforeEach(() => {});

test("navigate to shop item child route", async () => {
  const watchData = [
    {
      id: "1",
      watchName: "Leather Timekeeper",
      imgDescription: "leather timekeeper image description",
    },
    {
      id: "2",
      watchName: "Blue Horizon",
      imgDescription: "blue horizon image description",
    },
    {
      id: "3",
      watchName: "Woodland",
      imgDescription: "woodland image description",
    },
  ];
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/shop"]}>
      <RouteSwitch watchData={watchData} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Shopping page!/)).toBeInTheDocument();
  await user.click(screen.getByRole("link", { name: "Leather Timekeeper $" }));
  expect(
    screen.queryByText(/blue horizon image description/)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(/woodland image description/)
  ).not.toBeInTheDocument();
  expect(
    screen.getByText(/leather timekeeper image description/)
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
      <ItemLayout watchData={watchData} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Blue Horizon/)).toBeInTheDocument();
  expect(screen.getByText(/Leather Timekeeper/)).toBeInTheDocument();
  expect(screen.getByText(/Woodland/)).toBeInTheDocument();
});
