import styles from "../assets/styles/globalStyles.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";

export const MainLayout = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const isMobile = window.matchMedia("(max-device-width: 812px)").matches;

  const mainWrapper = `${
    isHomePage ? styles.parentWrapperHome : styles.notParentWrapperHome
  }`;

  return (
    <>
      <div className={mainWrapper}>
        <Header isMobile={isMobile} />
        <Outlet />
      </div>
    </>
  );
};
