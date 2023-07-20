import { useContext } from "react";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CheckOutBtn = () => {
  const { resetShoppingCart } = useContext(CartContext);

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
