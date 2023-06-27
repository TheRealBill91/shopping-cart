import { useEffect, useState } from "react";
import { HomePage } from "./pages/Home/Home";
import { RouteSwitch } from "./routes/RouteSwitch";
import { productData } from "./data/ProductData";

function App() {
  const [watchData, setWatchData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setWatchData(productData);
  }, []);

  const addWatchToCart = (watchItem) => {
    const targetWatchItem = watchData.find((item) => {
      return item.id === watchItem.id;
    });

    setCartItems(...cartItems, targetWatchItem);
  };

  return (
    <>
      <RouteSwitch
        addWatchToCart={addWatchToCart}
        cartItems={cartItems}
        watchData={watchData}
      />
    </>
  );
}

export default App;
