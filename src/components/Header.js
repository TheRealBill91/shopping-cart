import { NavBar } from "./NavBar";

export const Header = (props) => {
  const { cartLength } = props;
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid lightgray",
        }}
      >
        <div className="titleAndLogoContainer">
          <h1>Timeless</h1>
        </div>
        <NavBar cartLength={cartLength} />
      </header>
    </>
  );
};
