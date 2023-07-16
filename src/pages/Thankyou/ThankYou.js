// Page that thanks the customer for placing an order

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const ThankYou = () => {
  const navigate = useNavigate();

  const directToShopPage = () => {
    return navigate("/shop");
  };

  useEffect(() => {
    setTimeout(directToShopPage, 3000);
  }, [navigate]);

  return (
    <main className={styles.thankYouMain}>
      <p>
        Thank you for placing an order with <strong>Timeless</strong>
      </p>
    </main>
  );
};
