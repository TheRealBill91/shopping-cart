import { ItemLayout } from "./ItemLayout";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Shop = (props) => {
  const { watchData, addWatchToCart, cartLength } = props;
  // const [pageVisible, setPageVisible] = useState(false);

  // useEffect(() => {
  //   setPageVisible(true);
  // }, []);

  return (
    <>
      <main className={styles.shopMain}>
        <h2 className={styles.shopH2}>Shopping page!</h2>
        <ItemLayout
          styles={styles}
          addWatchToCart={addWatchToCart}
          watchData={watchData}
        />
      </main>
    </>
  );
};
