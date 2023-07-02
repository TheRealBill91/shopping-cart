import { CartItemLayout } from "./CartItemLayout";

export const Checkout = (props) => {
  const { cartTotal, cartItems, incrementCartItemQty, decrementCartItemQty } =
    props;
  return (
    <main>
      <CartItemLayout
        incrementCartItemQty={incrementCartItemQty}
        decrementCartItemQty={decrementCartItemQty}
        cartItems={cartItems}
        cartTotal={cartTotal}
      />
    </main>
  );
};
