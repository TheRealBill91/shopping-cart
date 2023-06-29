export const AddToCartButton = (props) => {
  const { addWatchToCart, watchItem } = props;
  console.log(watchItem.price);
  return (
    <>
      <button
        onClick={() => addWatchToCart(watchItem)}
        style={{ width: "70%" }}
      >
        Add to Cart
      </button>
    </>
  );
};
