import { useEffect, useState } from "react";
import { HomePage } from "./pages/Home/Home";
import { RouteSwitch } from "./routes/RouteSwitch";
import { productData } from "./data/ProductData";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(productData);
  }, []);

  return (
    <>
      <RouteSwitch cartItems={cartItems} />
    </>
  );
}

export default App;
