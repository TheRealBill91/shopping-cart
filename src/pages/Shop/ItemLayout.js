import { useEffect } from "react";
import { Item } from "./Item";

export const ItemLayout = (props) => {
    const { watchData, addWatchToCart } = props;

    return (
        <section style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            {watchData &&
                watchData.map((watchItem) => (
                    <Item
                        key={watchItem.id}
                        watchItem={watchItem}
                        addWatchToCart={addWatchToCart}
                    />
                ))}
        </section>
    );
};
