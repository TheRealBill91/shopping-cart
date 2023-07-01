import { NavBar } from "./NavBar";
import styles from "./styles.module.css";

export const Header = (props) => {
  const { cartLength } = props;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.titleAndLogoContainer}>
          <h1>Timeless</h1>
        </div>
        <NavBar cartLength={cartLength} />
      </header>
    </>
  );
};
