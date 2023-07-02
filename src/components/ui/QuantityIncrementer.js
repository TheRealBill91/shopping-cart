import styles from "../styles.module.css";

export const QuantityIncrementer = (props) => {
  const { cartItem, incrementCartItemQty, decrementCartItemQty } = props;
  return (
    <div className={styles.quantityIncrementerContainer}>
      <button onClick={() => decrementCartItemQty(cartItem)}>-</button>
      <input
        min={0}
        name="quantity"
        placeholder="quantity"
        type="number"
        value={cartItem.quantity}
      ></input>
      <button onClick={() => incrementCartItemQty(cartItem)}>+</button>
    </div>
  );
};
