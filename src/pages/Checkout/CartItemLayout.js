import { CartItem } from "./CartItem";

export const CartItemLayout = (props) => {
  const { cartItems, cartTotal } = props;
  return (
    <>
      <h2>Check out</h2>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      <p>Total: ${cartTotal}</p>
    </>
  );
};
