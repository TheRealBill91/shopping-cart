import styles from "./styles.module.css";
import { QuantityIncrementer } from "../../components/ui/QuantityIncrementer";

export const CartItem = (props) => {
  const { cartItem } = props;

  return (
    <>
      <div className={styles.checkoutItem}>
        <img src={cartItem.productImage} alt={cartItem.imageAlt}></img>
        <div className={styles.itemInfoContainer}>
          <h3>{cartItem.watchName}</h3>
          <QuantityIncrementer cartItem={cartItem} />
          {/* <p>Quantity: {cartItem.quantity}</p> */}
        </div>
      </div>
    </>
  );
};

//watch name
//price
//quantity
//image
