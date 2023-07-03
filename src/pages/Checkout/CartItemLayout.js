import { CartItem } from "./CartItem";

export const CartItemLayout = (props) => {
  const {
    cartItems,
    cartTotal,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
    removeWatchFromCart,
  } = props;
  return (
    <>
      <h2>Check out</h2>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            incrementCartItemQty={incrementCartItemQty}
            decrementCartItemQty={decrementCartItemQty}
            handleItemQuantityInput={handleItemQuantityInput}
            cartItem={cartItem}
            removeWatchFromCart={removeWatchFromCart}
          />
        ))}
      <p>Total: ${cartTotal}</p>
    </>
  );
};
