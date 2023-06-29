export const QuantityIncrementer = () => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid lightgrey",
        justifyContent: "center",
      }}
    >
      <button>-</button>
      <input
        style={{ width: "50%" }}
        placeholder="Quantity"
        type="number"
        name="quantity"
      ></input>
      <button>+</button>
    </div>
  );
};
