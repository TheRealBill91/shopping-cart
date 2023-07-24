import { NavBar } from "./NavBar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { MobileMenu } from "./ui/MobileMenu";
import { useState } from "react";
import { MobileMenuBtn } from "./ui/MobileMenuBtn";

export const Header = (props) => {
  const { cartLength, isMobile } = props;
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  console.log(isMobile);
  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      ) : null}
      <header className={styles.header}>
        <div className={styles.titleAndLogoContainer}>
          <Link to={"/"}>
            <h1>Timeless</h1>
          </Link>
        </div>

        <MobileMenuBtn toggleMobileMenu={toggleMobileMenu} />
        <NavBar cartLength={cartLength} />
      </header>
    </>
  );
};
