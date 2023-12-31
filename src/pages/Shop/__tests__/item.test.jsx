import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { productData } from "../../../data/ProductData";
import { Item } from "../Item";
import { ShopContext } from "../../../context/ShopContext";

const watchData = productData.slice(0, 2);

test("renders targetWatchItem properties", () => {
  const targetWatchItem = watchData[0].watchName;
  const itemNameLink = targetWatchItem.split(" ").join("").toLowerCase();

  render(
    <MemoryRouter initialEntries={[`/shop/${itemNameLink}`]}>
      <ShopContext.Provider value={{ watchData }}>
        <Item watchData={watchData} />
      </ShopContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText(/Elegant Mesh/)).toBeInTheDocument();
  expect(
    screen.getByText(
      /This elegant wristwatch features a black face with silver hands and hour markers, set in a sleek silver case./
    )
  ).toBeInTheDocument();
  expect(screen.getByText(/385.43/)).toBeInTheDocument();
  expect(screen.getByAltText(/Calvin Klein wristwatch/)).toBeInTheDocument();
});
