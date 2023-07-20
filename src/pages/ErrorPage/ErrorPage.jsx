import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <main className={styles.errorPageMain}>
      <h1>Looks like we ran into an issue!</h1>
      <p>{error.statusText || error.message}</p>
    </main>
  );
};
