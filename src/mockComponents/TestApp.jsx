import { useState, useEffect } from "react";
import { RouteSwitch } from "../routes/RouteSwitch";
import { ShopContext } from "../context/ShopContext";
import { CartContext } from "../context/CartContext";
import { Checkout } from "../pages/Checkout/Checkout";
import { RouterProvider } from "react-router-dom";
import { createMemoryRouter } from "react-router-dom";
import { Shop } from "../pages/Shop/Shop";
import { Item } from "../pages/Shop/Item";
import { MainLayout } from "../components/MainLayout";
import { Home } from "../pages/Home/Home";
import { ThankYou } from "../pages/Thankyou/ThankYou";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const TestApp = (props) => {
  const initialCartItems = [
    {
      id: 1,
      watchName: "leather watch",
      quantity: 1,
      price: 449,
      imgDescription: "leather watch image description",
    },
    {
      id: 2,
      watchName: "silver watch",
      quantity: 3,
      price: 299,
      imgDescription: "silver watch image description",
    },
    {
      id: 3,
      watchName: "rose gold watch",
      quantity: 1,
      price: 399,
      imgDescription: "rose gold watch image description",
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartTotal, setCartTotal] = useState();

  const watchData = initialCartItems;

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
    const calculateCartTotal = () => {
      const cartTotal = cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
      const roundedCartTotal = cartTotal.toFixed(2);
      setCartTotal(roundedCartTotal);
    };
    calculateCartTotal();
  }, [cartItems]);

  useEffect(() => {
    const calculateCartTotal = () => {
      const cartTotal = cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
      const roundedCartTotal = cartTotal.toFixed(2);
      setCartTotal(roundedCartTotal);
    };
    calculateCartTotal();
  }, []);

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

  const addWatchToCart = (watchItem) => {
    const targetWatchItem = initialCartItems.find((item) => {
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

  const cartContextValues = {
    cartItems,
    cartTotal,
    cartLength,
    removeWatchFromCart,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
    resetShoppingCart,
  };

  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "/shop",
          children: [
            {
              index: true,
              element: <Shop />,
            },
            {
              path: ":watchName",
              element: <Item />,
            },
          ],
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/thankyou",
          element: <ThankYou />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: [`${props.initialEntries}`],
  });

  return (
    <>
      <ShopContext.Provider value={{ addWatchToCart, watchData }}>
        <CartContext.Provider value={cartContextValues}>
          <RouterProvider router={router} />
        </CartContext.Provider>
      </ShopContext.Provider>
    </>
  );
};
