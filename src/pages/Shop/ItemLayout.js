import { ItemPreview } from "./ItemPreview";

export const ItemLayout = (props) => {
  const { watchData, addWatchToCart, styles } = props;

  return (
    <section className={styles.section}>
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
