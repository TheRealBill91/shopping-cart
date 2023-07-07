// Page that thanks the customer for placing an order

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ThankYou = () => {
  const navigate = useNavigate();

  const directToShopPage = () => {
    console.log("getting here?");
    return navigate("/shop");
  };

  useEffect(() => {
    setTimeout(directToShopPage, 2500);
  }, [navigate]);

  return (
    <main>
      <p>
        Thank you for placing an order with <strong>Timeless</strong>
      </p>
    </main>
  );
};
