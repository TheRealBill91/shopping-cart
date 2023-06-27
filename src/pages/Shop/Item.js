export const Item = (props) => {
    const { item } = props;

    return (
        <button
            style={{ outline: "1px solid black", width: "200px", height: "200px" }}
        >
            <article>
                <img
                    style={{
                        width: "80%",
                        height: "auto",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    src={item.productImage}
                    alt="a silver watch with a blue face and a yellow background"
                ></img>
                <h3>{item.watchName}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </article>
        </button>
    );
};
