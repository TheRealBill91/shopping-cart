import { Link } from "react-router-dom";
import styles from "../styles.module.css";

export const BackToShopBtn = () => {
  return (
    <div style={{ height: "50px" }}>
      <Link className={styles.linkStyle} to={"/shop"}>
        <button>Back to shop</button>
      </Link>
    </div>
  );
};
