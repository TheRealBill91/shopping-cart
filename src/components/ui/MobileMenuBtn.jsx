import { Icon } from "./Icon";
import styles from "../styles.module.css";

export const MobileMenuBtn = (props) => {
  const { toggleMobileMenu, mobileMenuVisible } = props;

  const closeMenuStyle = mobileMenuVisible
    ? {
        position: "absolute",
        marginTop: "20px",
      }
    : null;

  return (
    <button
      title="mobile menu button toggle"
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
