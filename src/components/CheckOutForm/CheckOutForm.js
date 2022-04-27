import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Alert, CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { clearTheCart } from "../../utilities/fakedb";
import useAuthContext from "../Contexts/useAuthContext";
import { displayData } from "../Database/fakedb";

const CheckOutForm = ({ grandtotal }) => {
  const { user } = useAuthContext();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://obscure-basin-04556.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: grandtotal }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [grandtotal]);

  const handleSubmitPayment = async (data, e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      setError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: data.name,
            email: data.email,
          },
        },
      });
    if (intentError) {
      setSuccess("");
      setError(intentError.message);
    } else {
      setSuccess("Your Payment is completed");
      setError("");
      setProcessing(false);
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };

      const savedCart = displayData();
      data.order = savedCart;
      data.payment = payment;

      fetch("https://obscure-basin-04556.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Order has been placed");
            reset();
            clearTheCart();
          }
        });
    }
  };

  return (
    <div>
      <img
        className="ship"
        src="https://pocketshop.com.bd/wp-content/uploads/2020/07/238-2388762_place-your-order-now-hd-png-download.png"
        alt=""
      />
      <form
        className="mx-md-5 mx-2"
        onSubmit={handleSubmit(handleSubmitPayment)}
      >
        <h1 className="my-3">Check Out</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sm={6} className="py-5">
            <div className="border border-warning p-5  me-md-5  paymentDetail">
              <h3 className="mb-3 d-inline-block border-bottom border-2 border-danger ">
                Details
              </h3>
              <input
                placeholder="Name"
                className="my-3 py-1 w-100 rounded-pill border-warning ps-3"
                defaultValue={user.displayName}
                {...register("name")}
                required
              />
              <br />
              <input
                className="my-3 py-1 w-100 rounded-pill border-warning ps-3"
                placeholder="Email"
                defaultValue={user.email}
                {...register("email", { required: true })}
                required
              />
              <br />
              {errors.email && <span>This field is required</span>}
              <input
                className="my-3 py-1 w-100 rounded-pill border-warning ps-3"
                placeholder="Address"
                {...register("address")}
                required
              />
              <br />
              <input
                className="my-3 py-1 w-100 rounded-pill border-warning ps-3"
                placeholder="Phone"
                {...register("phone")}
                required
              />
              <br />
            </div>
          </Grid>
          <Grid item xs={12} md={5} sm={6} className="py-5">
            <h3 className="mb-3">Payment</h3>
            <div className=" p-5 shadow-lg m-0">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              {processing ? (
                <CircularProgress></CircularProgress>
              ) : (
                <Button
                  style={{ backgroundColor: "goldenrod" }}
                  className="py-1 my-3 cart-button px-4 border-0"
                  type="submit"
                  disabled={!stripe || success}
                >
                  Pay {grandtotal.toFixed(2)}
                </Button>
              )}

              {error && (
                <Alert
                  severity="error"
                  sx={{ mt: 3, width: "100%", mx: "auto" }}
                >
                  {error}
                </Alert>
              )}
              {success && (
                <Alert
                  severity="success"
                  sx={{ mt: 3, width: "100%", mx: "auto" }}
                >
                  {success}
                </Alert>
              )}
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CheckOutForm;
