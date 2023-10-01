import { Helmet } from "react-helmet";
import SubTitle from "../../Shared/SubShare/SubTitle/SubTitle";
//import PaymentForm from "./PaymentForm";
//import useCart from "../../../hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  /* const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
 */
  return (
    <div>
      <Helmet>
        <title>Learning Language | Payment</title>
      </Helmet>
      <SubTitle title="Payment"></SubTitle>

      <Elements stripe={stripePromise}>
        {/* <PaymentForm cart={cart} price={price}>
            </PaymentForm> */}
      </Elements>
    </div>
  );
};

export default Payment;
