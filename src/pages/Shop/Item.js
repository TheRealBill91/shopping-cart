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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            faucibus in ornare quam. Bibendum est ultricies integer quis auctor
            elit. Sit amet volutpat consequat mauris. Nec feugiat in fermentum
            posuere urna nec tincidunt. Amet justo donec enim diam. Vel orci
            porta non pulvinar. Tellus at urna condimentum mattis pellentesque
            id nibh. Scelerisque fermentum dui faucibus in. In metus vulputate
            eu scelerisque. Lacus vestibulum sed arcu non odio euismod lacinia
            at.
          </p>
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
