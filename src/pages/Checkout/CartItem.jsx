import styles from "./styles.module.css";
import { QuantityChanger } from "../../components/ui/QuantityChanger";
import { RemoveItemBtn } from "./RemoveItemBtn";

export const CartItem = (props) => {
  const { cartItem } = props;

  return (
    <>
      <div className={styles.checkoutItem}>
        <section className={styles.imageContainer}>
          <img src={cartItem.productImage} alt={cartItem.imageAlt}></img>
        </section>
        <div className={styles.itemInfoContainer}>
          <h3 className={styles.checkoutItemH3}>{cartItem.watchName}</h3>
          <QuantityChanger cartItem={cartItem} />
        </div>
        <RemoveItemBtn cartItem={cartItem} />
      </div>
    </>
  );
};
