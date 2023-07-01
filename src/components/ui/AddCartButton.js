export const AddToCartButton = (props) => {
  const { addWatchToCart, watchItem } = props;
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
