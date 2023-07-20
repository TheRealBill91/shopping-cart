import { CartItemLayout } from "./CartItemLayout";
import { BackToShopBtn } from "../../components/ui/BackToShopBtn";
import { EmptyCartMsg } from "./EmptyCartMsg";
import styles from "./styles.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Checkout = () => {
  const { cartLength } = useContext(CartContext);
  return (
    <main className={styles.checkoutMain}>
      <BackToShopBtn />
      {cartLength > 0 ? <CartItemLayout /> : <EmptyCartMsg />}
    </main>
  );
};
