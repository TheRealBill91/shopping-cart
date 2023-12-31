import { useState } from "react";
import { RouteSwitch } from "./routes/RouteSwitch";
import { productData } from "./data/ProductData";
import "./assets/styles/globalStyles.module.css";
import "./assets/styles/normalize.css";
import { ShopContext } from "./context/ShopContext";
import { CartContext } from "./context/CartContext";

export const App = () => {
  const [watchData, setWatchData] = useState(productData);
  const [cartItems, setCartItems] = useState([]);

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

  const resetShoppingCart = () => {
    setCartItems([]);
    setWatchData(productData);
  };

  const cartContextValues = {
    cartItems,
    removeWatchFromCart,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
    resetShoppingCart,
  };

  return (
    <>
      <CartContext.Provider value={cartContextValues}>
        <ShopContext.Provider value={{ addWatchToCart, watchData }}>
          <RouteSwitch />
        </ShopContext.Provider>
      </CartContext.Provider>
    </>
  );
};
