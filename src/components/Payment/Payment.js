import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import useCart from "../hoo/UseCart";

const stripePromise = loadStripe(
  "pk_test_51KiCK6HlIpHzNhGaKYyj2yJBNJNjExR3j2EbDXMAnK2UZjz1e5gJJUO7O8YaykOr1RcTANLewCYHeQqFeDcNanlD00UmPGPKeb"
);
const Payment = () => {
  const [cart, getCart] = useCart();

  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total += product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  let shipping = total > 0 ? 15 : 0;
  let tax = (total + shipping) * 0.1;
  let grandtotal = total + tax + shipping;
  grandtotal = parseFloat(grandtotal.toFixed(2));

  return (
    <div>
      <Elements stripe={stripePromise}>
        {grandtotal > 0 && <CheckOutForm grandtotal={grandtotal} />}
      </Elements>
    </div>
  );
};

export default Payment;
