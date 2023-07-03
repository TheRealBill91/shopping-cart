import styles from "./styles.module.css";

export const RemoveItemBtn = (props) => {
  const { removeWatchFromCart, cartItem } = props;
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
