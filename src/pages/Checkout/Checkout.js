import { CartItemLayout } from "./CartItemLayout";
import { BackToShopBtn } from "../../components/ui/BackToShopBtn";
import { EmptyCartMsg } from "./EmptyCartMsg";

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
      {cartItems.length > 0 ? (
        <CartItemLayout
          incrementCartItemQty={incrementCartItemQty}
          decrementCartItemQty={decrementCartItemQty}
          handleItemQuantityInput={handleItemQuantityInput}
          cartItems={cartItems}
          cartTotal={cartTotal}
        />
      ) : (
        <EmptyCartMsg />
      )}
      <BackToShopBtn />
    </main>
  );
};
