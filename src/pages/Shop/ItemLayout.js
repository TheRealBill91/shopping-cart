import { useEffect } from "react";
import { Item } from "./Item";

export const ItemLayout = (props) => {
    const { cartItems } = props;

    console.log(cartItems);

    return (
        <section>
            {cartItems && cartItems.map((item) => <Item key={item.id} item={item} />)}
        </section>
    );
};
