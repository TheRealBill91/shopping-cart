import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { useEffect } from "react";
import { Checkout } from "../pages/Checkout/Checkout";

export const RouteSwitch = (props) => {
    const { watchData, addWatchToCart, cartItems } = props;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/Shop"
                    element={
                        <Shop addWatchToCart={addWatchToCart} watchData={watchData} />
                    }
                />
                <Route path="Checkout" element={<Checkout cartItems={cartItems} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
