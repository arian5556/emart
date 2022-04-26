import "./cart.css";
import React from "react";

const Cart = (props) => {
  let total = 0;
  let totalQuantity = 0;
  for (const product of props.cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total += product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  let shipping = total > 0 ? 15 : 0;
  let tax = (total + shipping) * 0.1;
  let grandtotal = total + tax + shipping;

  return (
    <div className="font p-2 ">
      <h1 className="fw-bold">Order Summary</h1>
      <h3>
        <span className="fw-bold">Items Ordered: </span>
        {totalQuantity}
      </h3>
      <p>
        <span className="fw-bold">Total: </span> {total.toFixed(2)}
      </p>
      <p>
        <span className="fw-bold">Shipping: </span>
        {shipping}
      </p>
      <p>
        <span className="fw-bold">Tax: </span>
        {tax.toFixed(2)}
      </p>
      <p>
        <span className="fw-bold">Grand Total: </span>
        {grandtotal.toFixed(2)}
      </p>
      {props.children}
    </div>
  );
};

export default Cart;
