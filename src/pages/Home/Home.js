import { Header } from "../../components/Header";

export const HomePage = (props) => {
  const { cartLength } = props;
  return (
    <>
      {/* <Header cartLength={cartLength} /> */}
      <h2>Welcome Home!</h2>
    </>
  );
};
