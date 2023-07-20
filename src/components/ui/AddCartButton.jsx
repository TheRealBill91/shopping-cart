import styles from "../styles.module.css";

export const AddToCartButton = (props) => {
  const { addWatchToCart, targetWatchItem } = props;
  return (
    <>
      <button
        onClick={() => addWatchToCart(targetWatchItem)}
        className={styles.addToCartBtn}
      >
        Add to Cart
      </button>
    </>
  );
};
