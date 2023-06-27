import { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { ItemLayout } from "./ItemLayout";
import { Header } from "../../components/Header";

export const Shop = (props) => {
    const { cartItems } = props;

    return (
        <>
            <Header />
            <main>
                <h2>Shopping page!</h2>
                <ItemLayout cartItems={cartItems} />
            </main>
        </>
    );
};
