// Page that thanks the customer for placing an order

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const ThankYou = () => {
  const navigate = useNavigate();

  const directToShopPage = () => {
    return navigate("/shop");
  };

  useEffect(() => {
    const timer = setTimeout(directToShopPage, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <main className={styles.thankYouMain}>
      <p data-testid="thankYouMessage">
        Thank you for placing an order with <strong>Timeless</strong>
      </p>
    </main>
  );
};
