import { Icon } from "./Icon";
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

export const MobileMenuBtn = (props) => {
  const { toggleMobileMenu, mobileMenuVisible } = props;
  const [componentVisible, setComponentVisible] = useState(false);

  useEffect(() => {
    setComponentVisible(true);

    return () => setComponentVisible(false);
  }, []);

  console.log(mobileMenuVisible);
  const closeMenuStyle = mobileMenuVisible
    ? {
        position: "absolute",
        marginTop: "14%",
      }
    : null;

  // const mobileMenuBtnStyle =   mobileMenuVisible ?

  return (
    <button
      style={closeMenuStyle}
      onClick={toggleMobileMenu}
      className={styles.mobileMenuBtn}
    >
      {mobileMenuVisible ? (
        <Icon
          id="closeMenu"
          aria-label="closeMenu"
          className={styles.closeMenu}
        />
      ) : (
        <Icon
          id="listMenu"
          aria-label="openMobileMenu"
          className={styles.listMenu}
        />
      )}
    </button>
  );
};
