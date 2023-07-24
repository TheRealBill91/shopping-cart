import { CartItem } from "./CartItem";
import { CheckOutBtn } from "../../components/ui/CheckOutBtn";
import styles from "./styles.module.css";
import { QuantityChanger } from "../../components/ui/QuantityChanger";
import { RemoveItemBtn } from "./RemoveItemBtn";
import { useMemo } from "react";

export const CartItemLayout = ({ cartItems }) => {
  const cartTotal = useMemo(() => {
    const calculateCartTotal = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
    const roundedCartTotal = calculateCartTotal.toFixed(2);
    return roundedCartTotal;
  }, [cartItems]);

  return (
    <>
      <section className={styles.cartItemLayoutContainer}>
        <h2 className={styles.checkoutH2}>Check out</h2>
        {cartItems &&
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id}>
              <section className={styles.imageContainer}>
                <img src={cartItem.productImage} alt={cartItem.imageAlt}></img>
              </section>
              <div className={styles.itemInfoContainer}>
                <h3 className={styles.checkoutItemH3}>{cartItem.watchName}</h3>
                <QuantityChanger cartItem={cartItem} />
              </div>
              <RemoveItemBtn cartItem={cartItem} />
            </CartItem>
          ))}
        <div className={styles.priceAndCheckoutBtnContainer}>
          <p className={styles.cartTotalPara}>Total: ${cartTotal}</p>
          <CheckOutBtn />
        </div>
      </section>
    </>
  );
};
