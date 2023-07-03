import styles from "../styles.module.css";

export const QuantityIncrementer = (props) => {
  const {
    cartItem,
    incrementCartItemQty,
    decrementCartItemQty,
    handleItemQuantityInput,
  } = props;
  return (
    <div className={styles.quantityIncrementerContainer}>
      <button onClick={() => decrementCartItemQty(cartItem)}>-</button>
      <input
        min={1}
        name="quantity"
        type="number"
        value={cartItem.quantity}
        onChange={(e) => handleItemQuantityInput(e, cartItem)}
      ></input>
      <button onClick={() => incrementCartItemQty(cartItem)}>+</button>
    </div>
  );
};
