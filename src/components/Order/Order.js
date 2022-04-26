import { Grid } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import useCart from "../hoo/UseCart";
import Review from "../Review/Review";

const Order = () => {
  const [cart, getCart] = useCart();
  const removeitem = (p) => {
    const deleted = cart.filter((item) => p !== item.key);
    getCart(deleted);
    deleteFromDb(p);
  };
  const history = useHistory();
  const placerOrder = () => {
    history.push("/shipping");
  };
  return (
    <div>
      <Grid container spacing={2} className="p-2 mb-3 mt-5">
        <Grid item xs={12} md={9} sm={9}>
          {cart.map((item) => (
            <Review key={item.key} products={item} remove={removeitem}></Review>
          ))}
        </Grid>
        <Grid item xs={12} md={3} sm={3} className="text-md-start text-center">
          <Cart cart={cart}>
            <Button
              className="py-1 px-5 border-0 cart-button"
              onClick={placerOrder}
              style={{ backgroundColor: "goldenrod" }}
            >
              Place Order
            </Button>{" "}
          </Cart>
        </Grid>
      </Grid>
      <div className="container my-5 ">
        <div className="row ">
          <div className="col-lg-4 col-sm-4 d-flex  border border-1 p-4  justify-content-center">
            <div className="me-3 ">
              <i className="fas fa-truck text-warning fs-1"></i>
            </div>
            <div>
              <h6 className="m-0">FREE SHIPPING</h6>
              <p>For all order over 99$</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 d-flex  border border-1 p-4 justify-content-center">
            <div className="me-3">
              <i className="far fa-clock text-warning fs-1"></i>
            </div>
            <div>
              <h6 className="m-0">DELIVERY ON TIME</h6>
              <p>If good have problems</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 d-flex border border-1 p-4 justify-content-center">
            <div className="me-3">
              <i className="far fa-credit-card text-warning fs-1"></i>
            </div>
            <div>
              <h6 className="m-0">SECURE PAYMENT</h6>
              <p>100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
