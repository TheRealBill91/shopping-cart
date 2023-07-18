import { useEffect, useState } from "react";
import { RouteSwitch } from "./routes/RouteSwitch";
import { productData } from "./data/ProductData";
import "./assets/styles/globalStyles.module.css";
import "./assets/styles/normalize.css";

export const App = () => {
  const [watchData, setWatchData] = useState(productData);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState();

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

  const removeWatchFromCart = (watchItem) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== watchItem.id));
  };

  const addWatchToCart = (watchItem) => {
    const targetWatchItem = watchData.find((item) => {
      return item.id === watchItem.id;
    });

    const checkForDuplicate = checkForDuplicateCartItems(targetWatchItem);
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

  const checkForDuplicateCartItems = (targetWatchItem) => {
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

  const incrementCartItemQty = (cartItem) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        console.log(item);
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCartItems(newCartItems);
  };

  const decrementCartItemQty = (cartItem) => {
    if (cartItem.quantity === 1) {
      const newCartItems = cartItems.filter((item) => {
        return item.id !== cartItem.id;
      });
      setCartItems(newCartItems);
      return;
    } else {
      const newCartItems = cartItems.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      setCartItems(newCartItems);
    }
  };

  const handleItemQuantityInput = (e, cartItem) => {
    const inputValue = +e.target.value;
    console.log(typeof inputValue);
    if (typeof inputValue !== "number") {
      console.log("must be a number");
      return;
    } else if (inputValue < 1) {
      console.log("value must be greater than 0");
      return;
    }

    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: inputValue };
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

  const resetShoppingCart = () => {
    setCartItems([]);
    setCartTotal();
    setWatchData(productData);
  };

  return (
    <>
      <RouteSwitch
        addWatchToCart={addWatchToCart}
        removeWatchFromCart={removeWatchFromCart}
        cartItems={cartItems}
        watchData={watchData}
        cartLength={cartLength}
        cartTotal={cartTotal}
        incrementCartItemQty={incrementCartItemQty}
        decrementCartItemQty={decrementCartItemQty}
        handleItemQuantityInput={handleItemQuantityInput}
        setWatchData={setWatchData}
        resetShoppingCart={resetShoppingCart}
      />
    </>
  );
};
