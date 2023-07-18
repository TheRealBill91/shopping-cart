import { useState, useEffect } from "react";
import { RouteSwitch } from "../routes/RouteSwitch";

export const TestApp = () => {
  const initialCartItems = [
    {
      id: 1,
      watchName: "leather watch",
      quantity: 1,
      price: 449,
    },
    {
      id: 2,
      watchName: "silver watch",
      quantity: 3,
      price: 299,
    },
    {
      id: 3,
      watchName: "rose gold watch",
      quantity: 1,
      price: 399,
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartTotal, setCartTotal] = useState();

  const removeWatchFromCart = (watchItem) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== watchItem.id));
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

  const numberOfCartItems = () => {
    const length = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * 1,
      0
    );
    return length;
  };

  const cartLength = numberOfCartItems();

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
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  useEffect(() => {
    calculateCartTotal();
  }, []);

  return (
    <>
      <RouteSwitch
        cartItems={cartItems}
        removeWatchFromCart={removeWatchFromCart}
        incrementCartItemQty={incrementCartItemQty}
        decrementCartItemQty={decrementCartItemQty}
        handleItemQuantityInput={handleItemQuantityInput}
        cartLength={cartLength}
        cartTotal={cartTotal}
        resetShoppingCart={resetShoppingCart}
      ></RouteSwitch>
    </>
  );
};
