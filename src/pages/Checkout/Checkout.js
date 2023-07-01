import { CartItemLayout } from "./CartItemLayout";

export const Checkout = (props) => {
  const { cartTotal, cartItems } = props;
  return (
    <main>
      <CartItemLayout cartItems={cartItems} cartTotal={cartTotal} />
    </main>
  );
};
