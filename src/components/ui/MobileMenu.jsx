import { NavLink } from "react-router-dom";
import styles from "../styles.module.css";
import { MobileMenuBtn } from "./MobileMenuBtn";

export const MobileMenu = ({ toggleMobileMenu }) => {
  return (
    <nav className={styles.mobileMenuOverlay}>
      <MobileMenuBtn toggleMobileMenu={toggleMobileMenu} />
      <ul className={styles.mobileMenu}>
        <li>
          <NavLink className={styles.mobileNavLink} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.mobileNavLink} to={"/shop"}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.mobileNavLink} to={"/checkout"}>
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
