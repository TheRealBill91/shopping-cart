import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NavBar = (props) => {
  const { cartLength } = props;
  return (
    <nav>
      <ul style={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.navLink} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to={"/shop"}>
            Shop
          </Link>
        </li>
        <li>
          <span>{cartLength}</span>
          <Link className={styles.navLink} to={"/checkout"}>
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
};
