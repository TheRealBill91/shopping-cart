import { NavBar } from "./NavBar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { MobileMenu } from "./ui/MobileMenu";
import { useState } from "react";
import { MobileMenuBtn } from "./ui/MobileMenuBtn";

export const Header = (props) => {
  const { cartLength } = props;
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu
          mobileMenuVisible={mobileMenuVisible}
          toggleMobileMenu={toggleMobileMenu}
        />
      ) : null}
      <header className={styles.header}>
        <div className={styles.titleAndLogoContainer}>
          <Link to={"/"}>
            <h1>Timeless</h1>
          </Link>
        </div>

        {!mobileMenuVisible ? (
          <MobileMenuBtn
            mobileMenuVisible={mobileMenuVisible}
            toggleMobileMenu={toggleMobileMenu}
          />
        ) : null}

        <NavBar cartLength={cartLength} />
      </header>
    </>
  );
};
