import styles from "../styles.module.css";

export const QuantityIncrementer = (props) => {
  const { cartItem } = props;
  return (
    <div className={styles.quantityIncrementerContainer}>
      <button>-</button>
      <input
        min={0}
        name="quantity"
        placeholder="quantity"
        type="number"
        value={cartItem.quantity}
      ></input>
      <button>+</button>
    </div>
  );
};
