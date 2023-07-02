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
  // const cartLength = cartItems.length;

  const numberOfCartItems = () => {
    const length = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * 1,
      0
    );
    return length;
  };

  const cartLength = numberOfCartItems();

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  // create custom hook (start here)
  const addWatchToCart = (watchItem) => {
    const targetWatchItem = watchData.find((item) => {
      return item.id === watchItem.id;
    });

    const checkForDuplicate = preventDuplicateCartItems(targetWatchItem);
    const duplicateItem = checkForDuplicate[0];
    const originalItem = checkForDuplicate[1];
    if (duplicateItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === targetWatchItem.id) {
          return { ...originalItem, quantity: originalItem.quantity + 1 };
        } else {
          return item;
        }
      });

      setCartItems(newCartItems);
    } else {
      const newTargetWatchItem = {
        ...targetWatchItem,
        inCart: true,
        quantity: targetWatchItem.quantity + 1,
      };

      setCartItems([...cartItems, newTargetWatchItem]);
    }
  };

  const preventDuplicateCartItems = (targetWatchItem) => {
    const duplicateItem = cartItems.find((item) => {
      return item.watchName === targetWatchItem.watchName;
    });
    // undefined would mean no cart item with that name exists,
    // implying that there is no duplicate item trying to be added
    // to the cart
    const itemIsDuplicated =
      duplicateItem === undefined ? false : [true, duplicateItem];

    return itemIsDuplicated;
  };
  // end of custom hook

  const incrementCartItemQty = (cartItem) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return cartItem;
      }
    });

    setCartItems(newCartItems);
  };

  const decrementCartItemQty = (cartItem) => {
    if (cartItem.quantity === 1) {
      return;
    }

    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    setCartItems(newCartItems);
  };

  const calculateCartTotal = () => {
    const cartTotal = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
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
        incrementCartItemQty={incrementCartItemQty}
        decrementCartItemQty={decrementCartItemQty}
        setWatchData={setWatchData}
      />
    </>
  );
};
