import styles from "./styles.module.css";

export const CartItem = (props) => {
  const { cartItem } = props;

  return (
    <>
      <div className={styles}>
        <h3>{cartItem.watchName}</h3>
      </div>
    </>
  );
};

//watch name
//price
//quantity
//image
