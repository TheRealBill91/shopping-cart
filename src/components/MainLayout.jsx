import styles from "../assets/styles/globalStyles.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";

export const MainLayout = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <div
        className={`${
          isHomePage ? styles.parentWrapperHome : styles.notParentWrapperHome
        }`}
      >
        <Header />
        <Outlet />
      </div>
    </>
  );
};
