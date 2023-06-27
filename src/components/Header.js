import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="titleAndLogoContainer">
                    <h1>Timeless</h1>
                </div>
                <NavBar />
            </header>
        </>
    );
};
