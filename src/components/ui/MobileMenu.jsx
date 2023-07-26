import { NavLink } from "react-router-dom";
import styles from "../styles.module.css";
import { MobileMenuBtn } from "./MobileMenuBtn";
import { useEffect, useState } from "react";

export const MobileMenu = ({ toggleMobileMenu, mobileMenuVisible }) => {
  console.log(mobileMenuVisible);
  const [componentVisible, setComponentVisible] = useState(false);

  const mobileMenuStyle = componentVisible
    ? `${styles.mobileMenu} ${styles.open}`
    : styles.mobileMenu;
  useEffect(() => {
    setComponentVisible(true);

    return () => setComponentVisible(false);
  }, []);

  return (
    <>
      <nav className={styles.mobileMenuOverlay}>
        <MobileMenuBtn
          mobileMenuVisible={mobileMenuVisible}
          toggleMobileMenu={toggleMobileMenu}
        />
      </nav>
      <ul className={mobileMenuStyle}>
        <li onClick={toggleMobileMenu}>
          <NavLink className={styles.mobileNavLink} to={"/"}>
            Home
          </NavLink>
        </li>
        <li onClick={toggleMobileMenu}>
          <NavLink className={styles.mobileNavLink} to={"/shop"}>
            Shop
          </NavLink>
        </li>
        <li onClick={toggleMobileMenu}>
          <NavLink className={styles.mobileNavLink} to={"/checkout"}>
            Checkout
          </NavLink>
        </li>
      </ul>
    </>
  );
};
