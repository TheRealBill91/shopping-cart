import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export const BackToShopBtn = () => {
  return (
    <Link className={styles.backToShopBtn} to={"/shop"}>
      Back to shop
    </Link>
  );
};
