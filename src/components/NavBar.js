import { Link } from "react-router-dom";

export const NavBar = (props) => {
  const { cartLength } = props;
  return (
    <nav>
      <ul style={{ display: "flex", gap: "8px", listStyle: "none" }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
          <span>{cartLength}</span>
        </li>
        <li>
          <Link to={"/checkout"}>Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};
