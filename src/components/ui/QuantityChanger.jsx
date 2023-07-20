import { useContext } from "react";
import styles from "../styles.module.css";
import { CartContext } from "../../context/CartContext";

export const QuantityChanger = (props) => {
  const { cartItem } = props;
  const {
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
  } = useContext(CartContext);
  return (
    <div className={styles.quantityIncrementerContainer}>
      <button
        className={styles.quantityChangeBtn}
        onClick={() => decrementCartItemQty(cartItem)}
      >
        -
      </button>
      <input
        min={1}
        name="quantity"
        title="quantity-input"
        type="number"
        value={cartItem.quantity}
        onChange={(e) => handleItemQuantityInput(e, cartItem)}
      ></input>
      <button
        className={styles.quantityChangeBtn}
        onClick={() => incrementCartItemQty(cartItem)}
      >
        +
      </button>
    </div>
  );
};
