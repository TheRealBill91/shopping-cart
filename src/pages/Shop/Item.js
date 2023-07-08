import { AddToCartButton } from "../../components/ui/AddCartButton";
import { BackToShopBtn } from "../../components/ui/BackToShopBtn";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export const Item = (props) => {
  const { addWatchToCart, watchData } = props;
  const itemLinkLocation = useLocation();
  const itemNameLink = itemLinkLocation.pathname.slice(6);
  const targetWatchItem = watchData.find((item) => {
    return item.watchName.split(" ").join("").toLowerCase() === itemNameLink;
  });
  return (
    <main className={styles.itemMain}>
      <BackToShopBtn />
      <div className={styles.fullItemContainer}>
        <section className={styles.image}>
          <img
            className={styles.itemImg}
            src={targetWatchItem.productImage}
            alt={targetWatchItem.imageAlt}
          ></img>
        </section>

        <div className={styles.fullItemDetailsContainer}>
          <h3 className={styles.itemH3}>{targetWatchItem.watchName}</h3>
          <p>{targetWatchItem.imgDescription}</p>
          <p className={styles.ItemPricePara}>${targetWatchItem.price}</p>
          <AddToCartButton
            addWatchToCart={addWatchToCart}
            targetWatchItem={targetWatchItem}
          />
        </div>
      </div>
    </main>
  );
};
