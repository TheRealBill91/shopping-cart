import { Header } from "../../components/Header";

export const Checkout = (props) => {
  const { cartTotal } = props;
  return (
    <>
      {/* <Header /> */}
      <h2>Check out</h2>
      <p>${cartTotal}</p>
    </>
  );
};
