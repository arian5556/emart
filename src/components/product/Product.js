import "./product.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { Button } from "react-bootstrap";
import { Grid } from "@mui/material";

const Product = (props) => {
  const { name, img, seller, price, stock, star } = props.products;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <Grid container spacing={2} className="p-3 mb-3 border-bottom px-5">
      <Grid className="align-self-center" item xs={4} md={4} sm={4}>
        <img className="img-fluid" src={img} alt={name} />
      </Grid>
      <Grid item xs={8} md={8} sm={8}>
        <h3>{name}</h3>
        <p>
          <small>
            <span className="fw-bold">By: </span> {seller}
          </small>
        </p>
        <p>
          <span className="fw-bold">Price: </span>
          {price}
        </p>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star text-warning"
          fullSymbol="fas fa-star text-warning "
          readonly
        ></Rating>{" "}
        <br />
        <Button
          onClick={() => props.add(props.products)}
          className="py-1 my-3 cart-button px-4 border-0 "
          style={{ backgroundColor: "goldenrod" }}
        >
          <span className="me-2">{element}</span> Add to Cart
        </Button>{" "}
      </Grid>
    </Grid>
  );
};

export default Product;
