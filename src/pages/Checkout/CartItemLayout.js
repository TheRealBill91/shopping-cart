import { CartItem } from "./CartItem";

export const CartItemLayout = (props) => {
  const { cartItems, cartTotal, incrementCartItemQty, decrementCartItemQty } =
    props;
  return (
    <>
      <h2>Check out</h2>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            incrementCartItemQty={incrementCartItemQty}
            decrementCartItemQty={decrementCartItemQty}
            cartItem={cartItem}
          />
        ))}
      <p>Total: ${cartTotal}</p>
    </>
  );
};
