import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

const Review = (props) => {
  const { name, img, price, quantity } = props.products;
  return (
    <Grid container spacing={2} className="px-3 mb-3 border-bottom border-end">
      <Grid className="align-self-center text-center" item xs={4} md={4} sm={4}>
        <img className="img-fluid mb-2" src={img} alt={name} />
      </Grid>
      <Grid item xs={8} md={8} sm={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Typography
              variant="p"
              style={{ color: "gray" }}
              className="product-name"
            >
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <p className="align-self-center">
              <span className="fw-bold">Price: </span>
              {price}
            </p>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <p>
              <small>
                <span className="fw-bold">Quantity: </span>
                {quantity}
              </small>
            </p>
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Button
              className="py-1 px-5 border-0 cart-button my-3"
              onClick={() => props.remove(props.products.key)}
              style={{ backgroundColor: "goldenrod" }}
            >
              Remove
            </Button>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Review;
