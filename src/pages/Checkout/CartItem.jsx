import styles from "./styles.module.css";

export const CartItem = ({ children }) => {
  return <div className={styles.checkoutItem}>{children}</div>;
};
