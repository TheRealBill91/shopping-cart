import { createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  cartLength: 0,
  removeWatchFromCart: () => {},
  incrementCartItemQty: () => {},
  decrementCartItemQty: () => {},
  handleItemQuantityInput: () => {},
  resetShoppingCart: () => {},
});
