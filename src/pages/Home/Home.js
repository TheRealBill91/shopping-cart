import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export const HomePage = (props) => {
  const { cartLength } = props;
  return (
    <main className={styles.homeMain}>
      <div className={styles.homeBackgroundContainer}>
        <h2 className={styles.welcomeMessage}>
          Premium, finely engineered Watches
        </h2>
      </div>
    </main>
  );
};
