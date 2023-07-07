import { CartItem } from "./CartItem";
import styles from "./styles.module.css";

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
      <section className={styles.cartItemLayoutContainer}>
        <h2 className={styles.checkoutH2}>Check out</h2>
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
        <p className={styles.cartTotalPara}>Total: ${cartTotal}</p>
      </section>
    </>
  );
};
