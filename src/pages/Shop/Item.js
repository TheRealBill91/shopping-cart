import { useEffect } from "react";
import { AddToCartButton } from "../../components/ui/AddCartButton";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export const Item = (props) => {
  const { addWatchToCart } = props;
  const itemLinkLocation = useLocation();
  const watchItem = itemLinkLocation.state;
  return (
    <main>
      <div className={styles.fullItemContainer}>
        <img
          className={styles.itemImg}
          src={watchItem.productImage}
          alt={watchItem.imageAlt}
        ></img>
        <div className={styles.fullItemDetails}>
          <h3>{watchItem.watchName}</h3>
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
          <p>${watchItem.price}</p>
          <AddToCartButton
            addWatchToCart={addWatchToCart}
            watchItem={watchItem}
          />
        </div>
      </div>
    </main>
  );
};
