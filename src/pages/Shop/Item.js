import { useEffect } from "react";
import { AddToCartButton } from "../../components/ui/AddCartButton";
import { BackToShopBtn } from "../../components/ui/BackToShopBtn";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export const Item = (props) => {
  const { addWatchToCart, watchData } = props;
  const itemLinkLocation = useLocation();
  const itemID = +itemLinkLocation.pathname.slice(-1);
  const targetWatchItem = watchData.find((item) => {
    return item.number === itemID;
  });
  return (
    <main>
      <div className={styles.fullItemContainer}>
        <img
          className={styles.itemImg}
          src={targetWatchItem.productImage}
          alt={targetWatchItem.imageAlt}
        ></img>
        <div className={styles.fullItemDetails}>
          <h3>{targetWatchItem.watchName}</h3>
          <p>{targetWatchItem.imgDescription}</p>
          <p>${targetWatchItem.price}</p>
          <AddToCartButton
            addWatchToCart={addWatchToCart}
            targetWatchItem={targetWatchItem}
          />
          <BackToShopBtn />
        </div>
      </div>
    </main>
  );
};
