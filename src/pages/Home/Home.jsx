import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <main className={styles.homeMain}>
      <div className={styles.homeBackgroundContainer}>
        <h2 className={styles.welcomeMessage}>
          Premium watches, engineered to perfection
        </h2>
        <Link className={styles.goToShopBtn} to="/shop">
          Go to Shop
        </Link>
      </div>
    </main>
  );
};
