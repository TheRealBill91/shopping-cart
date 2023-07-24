import { Icon } from "./Icon";
import styles from "../styles.module.css";

export const MobileMenuBtn = (props) => {
  const { toggleMobileMenu } = props;
  return (
    <button onClick={toggleMobileMenu} className={styles.mobileMenuBtn}>
      <Icon id="listMenu" className={styles.listMenu} />
    </button>
  );
};
