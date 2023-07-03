export const AddToCartButton = (props) => {
  const { addWatchToCart, targetWatchItem } = props;
  return (
    <>
      <button
        onClick={() => addWatchToCart(targetWatchItem)}
        style={{ width: "70%" }}
      >
        Add to Cart
      </button>
    </>
  );
};
