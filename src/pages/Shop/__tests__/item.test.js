import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { productData } from "../../../data/ProductData";
import { Item } from "../Item";

const watchData = productData.slice(0, 2);

test("renders targetWatchItem properties", () => {
  const targetWatchItem = watchData[0].watchName;
  const itemNameLink = targetWatchItem.split(" ").join("").toLowerCase();

  render(
    <MemoryRouter initialEntries={[`/shop/${itemNameLink}`]}>
      <Item watchData={watchData} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Elegant Mesh/)).toBeInTheDocument();
  expect(
    screen.getByText(
      /This elegant wristwatch features a black face with silver hands and hour markers, set in a sleek silver case./
    )
  ).toBeInTheDocument();
  expect(screen.getByText(/385.43/)).toBeInTheDocument();
  expect(
    screen.getByAltText(
      /A photo of a Calvin Klein wristwatch with a black face, silver hands and hour markers, and a black mesh strap, resting on its side on a yellow background./
    )
  ).toBeInTheDocument();
});
