import styles from "./styles.module.css";

export const ItemLayout = ({ children }) => {
  return <section className={styles.itemLayout}>{children}</section>;
};
