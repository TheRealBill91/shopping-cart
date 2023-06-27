import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { useEffect } from "react";

export const RouteSwitch = (props) => {
    const { cartItems } = props;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Shop" element={<Shop cartItems={cartItems} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
