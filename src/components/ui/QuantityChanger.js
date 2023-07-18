import styles from "../styles.module.css";

export const QuantityChanger = (props) => {
  const {
    cartItem,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
  } = props;
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
