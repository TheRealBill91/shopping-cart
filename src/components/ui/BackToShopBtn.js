import { Link } from "react-router-dom";

export const BackToShopBtn = () => {
  return (
    <>
      <Link to={"/shop"}>
        <button>Back to shop</button>
      </Link>
    </>
  );
};
