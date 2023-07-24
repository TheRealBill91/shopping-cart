import { ItemLayout } from "./ItemLayout";
import styles from "./styles.module.css";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { ItemPreview } from "./ItemPreview";

export const Shop = () => {
  const { watchData } = useContext(ShopContext);
  return (
    <>
      <main className={styles.shopMain}>
        <h2 className={styles.shopH2}>Shopping page!</h2>
        <ItemLayout>
          {watchData &&
            watchData.map((watchItem, index) => (
              <ItemPreview
                key={watchItem.id}
                watchItem={watchItem}
                styles={styles}
              />
            ))}
        </ItemLayout>
      </main>
    </>
  );
};
