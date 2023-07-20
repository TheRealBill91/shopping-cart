import { CartItem } from "./CartItem";
import { CheckOutBtn } from "../../components/ui/CheckOutBtn";
import styles from "./styles.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItemLayout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <>
      <section className={styles.cartItemLayoutContainer}>
        <h2 className={styles.checkoutH2}>Check out</h2>
        {cartItems &&
          cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
        <div className={styles.priceAndCheckoutBtnContainer}>
          <p className={styles.cartTotalPara}>Total: ${cartTotal}</p>
          <CheckOutBtn />
        </div>
      </section>
    </>
  );
};
