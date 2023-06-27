import { AddToCartButton } from "../../components/ui/AddCartButton";
import { QuantityIncrementer } from "../../components/ui/QuantityIncrementer";

export const Item = (props) => {
    const { watchItem, addWatchToCart } = props;

    return (
        <button>
            <article
                style={{
                    display: "flex",
                    flexDirection: "column",
                    outline: "1px solid black",
                    width: "200px",
                    height: "auto",
                }}
            >
                <img
                    style={{
                        width: "80%",
                        height: "auto",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    src={watchItem.productImage}
                    alt="a silver watch with a blue face and a yellow background"
                ></img>
                <h3>{watchItem.watchName}</h3>
                <p>${watchItem.price}</p>
                <AddToCartButton onClick={() => addWatchToCart(watchItem)} />
            </article>
        </button>
    );
};
