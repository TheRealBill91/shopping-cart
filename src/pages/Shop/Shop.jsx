import { ItemLayout } from "./ItemLayout";
import styles from "./styles.module.css";

export const Shop = () => {
  return (
    <>
      <main className={styles.shopMain}>
        <h2 className={styles.shopH2}>Shopping page!</h2>
        <ItemLayout styles={styles} />
      </main>
    </>
  );
};
