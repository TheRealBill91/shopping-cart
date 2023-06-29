import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { ErrorPage } from "../pages/ErrorPage";
import { Checkout } from "../pages/Checkout/Checkout";
import { Header } from "../components/Header";
import { Item } from "../pages/Shop/Item";

export const RouteSwitch = (props) => {
  const { watchData, addWatchToCart, cartItems, cartLength, cartTotal } = props;

  return (
    <BrowserRouter>
      <Header cartLength={cartLength} />
      <Routes>
        <Route path="/" element={<HomePage cartLength={cartLength} />} />
        <Route path="/shop">
          <Route
            index
            element={
              <Shop
                addWatchToCart={addWatchToCart}
                watchData={watchData}
                cartLength={cartLength}
              />
            }
          />
          <Route
            path=":id"
            element={<Item addWatchToCart={addWatchToCart} />}
          />
        </Route>
        <Route
          path="/checkout"
          element={
            <Checkout
              cartTotal={cartTotal}
              cartItems={cartItems}
              cartLength={cartLength}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
