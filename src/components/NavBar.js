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
        <li className={styles.checkoutLinkContainer}>
          <NavLink className={styles.navLink3} to={"/checkout"}>
            Checkout
          </NavLink>
          <span className={styles.cartLength} data-testid="cart-length">
            {cartLength}
          </span>
        </li>
      </ul>
    </nav>
  );
};
