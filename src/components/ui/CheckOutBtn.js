import styles from "../styles.module.css";
import { Link } from "react-router-dom";

export const CheckOutBtn = (props) => {
  const { resetShoppingCart } = props;
  return (
    <>
      <Link
        onClick={resetShoppingCart}
        className={styles.checkOutBtn}
        to={"/thankyou"}
      >
        Check Out
      </Link>
    </>
  );
};
