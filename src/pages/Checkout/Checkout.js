import { CartItem } from "./CartItem";

export const Checkout = (props) => {
  const { cartTotal, cartItems } = props;
  return (
    <>
      <h2>Check out</h2>
      {cartItems &&
        cartItems.map((cartItem, index) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      <p>${cartTotal}</p>
    </>
  );
};
