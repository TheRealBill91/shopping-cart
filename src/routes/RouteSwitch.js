import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { ErrorPage } from "../pages/ErrorPage";
import { Checkout } from "../pages/Checkout/Checkout";
import { Header } from "../components/Header";
import { Item } from "../pages/Shop/Item";
import styles from "../assets/styles/globalStyles.module.css";
import { ThankYou } from "../pages/ThankYou";

export const RouteSwitch = (props) => {
  const {
    watchData,
    addWatchToCart,
    removeWatchFromCart,
    cartItems,
    cartLength,
    cartTotal,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
    resetShoppingCart,
  } = props;

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log(isHomePage);

  return (
    <div
      className={`${
        isHomePage ? styles.parentWrapperHome : styles.notParentWrapperHome
      }`}
    >
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
            path=":watchName"
            element={
              <Item watchData={watchData} addWatchToCart={addWatchToCart} />
            }
          />
        </Route>
        <Route
          path="/checkout"
          element={
            <Checkout
              cartTotal={cartTotal}
              cartItems={cartItems}
              cartLength={cartLength}
              incrementCartItemQty={incrementCartItemQty}
              decrementCartItemQty={decrementCartItemQty}
              handleItemQuantityInput={handleItemQuantityInput}
              removeWatchFromCart={removeWatchFromCart}
              resetShoppingCart={resetShoppingCart}
            />
          }
        />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
