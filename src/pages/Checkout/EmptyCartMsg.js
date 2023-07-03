import styles from "./styles.module.css";

export const EmptyCartMsg = () => {
  return (
    <>
      <div className={styles.emptyCartContainer}>
        <p>Your cart is empty...</p>
        <p>
          You still have time to pick something <em>timeless</em>
        </p>
      </div>
    </>
  );
};
