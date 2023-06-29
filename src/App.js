import { useEffect, useState } from "react";
import { RouteSwitch } from "./routes/RouteSwitch";
import { productData } from "./data/ProductData";
import "./assets/styles/globalStyles.css";
import "./assets/styles/normalize.css";

export const App = () => {
  const [watchData, setWatchData] = useState(productData);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState();

  // Number of items in the cart
  const cartLength = cartItems.length;

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  const addWatchToCart = (watchItem) => {
    const targetWatchItem = watchData.find((item) => {
      return item.id === watchItem.id;
    });

    setCartItems([...cartItems, targetWatchItem]);
  };

  const calculateCartTotal = () => {
    const cartTotal = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    const roundedCartTotal = cartTotal.toFixed(2);
    setCartTotal(roundedCartTotal);
  };

  return (
    <>
      <RouteSwitch
        addWatchToCart={addWatchToCart}
        cartItems={cartItems}
        watchData={watchData}
        cartLength={cartLength}
        cartTotal={cartTotal}
        setWatchData={setWatchData}
      />
    </>
  );
};
