import { CartItemLayout } from "./CartItemLayout";
import { BackToShopBtn } from "../../components/ui/BackToShopBtn";
import { EmptyCartMsg } from "./EmptyCartMsg";
import styles from "./styles.module.css";

export const Checkout = (props) => {
  const {
    cartTotal,
    cartItems,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
    removeWatchFromCart,
  } = props;
  return (
    <main className={styles.checkoutMain}>
      {cartItems.length > 0 ? (
        <CartItemLayout
          incrementCartItemQty={incrementCartItemQty}
          decrementCartItemQty={decrementCartItemQty}
          handleItemQuantityInput={handleItemQuantityInput}
          cartItems={cartItems}
          cartTotal={cartTotal}
          removeWatchFromCart={removeWatchFromCart}
        />
      ) : (
        <EmptyCartMsg />
      )}
      <BackToShopBtn />
    </main>
  );
};
