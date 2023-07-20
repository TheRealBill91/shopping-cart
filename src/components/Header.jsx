import { NavBar } from "./NavBar";
import styles from "./styles.module.css";
import { Link, Outlet } from "react-router-dom";

export const Header = (props) => {
  const { cartLength } = props;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.titleAndLogoContainer}>
          <Link to={"/"}>
            <h1>Timeless</h1>
          </Link>
        </div>
        <NavBar cartLength={cartLength} />
      </header>
    </>
  );
};
