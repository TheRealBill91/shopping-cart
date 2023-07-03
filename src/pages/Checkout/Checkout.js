import { CartItemLayout } from "./CartItemLayout";
import { BackToShopBtn } from "../../components/ui/BackToShopBtn";

export const Checkout = (props) => {
  const {
    cartTotal,
    cartItems,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
  } = props;
  return (
    <main>
      <CartItemLayout
        incrementCartItemQty={incrementCartItemQty}
        decrementCartItemQty={decrementCartItemQty}
        handleItemQuantityInput={handleItemQuantityInput}
        cartItems={cartItems}
        cartTotal={cartTotal}
      />
      <BackToShopBtn />
    </main>
  );
};
