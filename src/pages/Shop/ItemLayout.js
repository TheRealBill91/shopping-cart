import { ItemPreview } from "./ItemPreview";
import styles from "./styles.module.css";

export const ItemLayout = (props) => {
  const { watchData, addWatchToCart } = props;

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
