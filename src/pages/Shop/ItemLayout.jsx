import { ItemPreview } from "./ItemPreview";
import styles from "./styles.module.css";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

export const ItemLayout = () => {
  const { watchData, addWatchToCart } = useContext(ShopContext);

  return (
    <section className={styles.itemLayout}>
      {watchData &&
        watchData.map((watchItem, index) => (
          <ItemPreview
            key={watchItem.id}
            watchItem={watchItem}
            addWatchToCart={addWatchToCart}
            styles={styles}
          />
        ))}
    </section>
  );
};
