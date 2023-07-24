import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { Icon } from "./ui/Icon";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useMemo } from "react";

export const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  const cartLength = useMemo(() => {
    const numberOfCartItems = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * 1,
      0
    );
    return numberOfCartItems;
  }, [cartItems]);

  return (
    <nav className={styles.desktopNavLinks}>
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
            <sup className={styles.cartLength} data-testid="cart-length">
              {cartLength}
            </sup>
            <Icon id="shoppingcart" className={styles.shoppingCart} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
