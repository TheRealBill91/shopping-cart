import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <ul style={{ display: "flex", gap: "8px", listStyle: "none" }}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/Shop"}>Shop</Link>
                </li>
            </ul>
        </nav>
    );
};
