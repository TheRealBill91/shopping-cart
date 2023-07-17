import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { Icon } from "../components/ui/Icon";

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
          <NavLink
            aria-label="cartLink"
            role="link"
            className={styles.navLink3}
            to={"/checkout"}
          >
            <div className={styles.cartLength} data-testid="cart-length">
              {cartLength}
            </div>
            <Icon id="shoppingcart" className={styles.shoppingCart} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
