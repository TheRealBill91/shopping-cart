import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const NavBar = (props) => {
  const { cartLength } = props;
  return (
    <nav id="navLinks">
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink className={styles.navLink} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to={"/shop"}>
            Shop
          </NavLink>
        </li>
        <li>
          <span>{cartLength}</span>
          <NavLink className={styles.navLink} to={"/checkout"}>
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
