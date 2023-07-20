import { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "../../context/CartContext";

export const RemoveItemBtn = (props) => {
  const { cartItem } = props;
  const { removeWatchFromCart } = useContext(CartContext);
  return (
    <>
      <button
        onClick={() => removeWatchFromCart(cartItem)}
        className={styles.removeItemBtn}
      >
        Remove
      </button>
    </>
  );
};
