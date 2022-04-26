import { CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import Products from "../../hook/Effect";
import Product from "../Products/Products";

const Items = () => {
  const [product] = Products();
  return (
    <div className="text-center my-5">
      <h1>New Collections</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        Aliquid, totam.
      </p>
      <Container>
        <Grid container spacing={4} className="mb-5">
          {product[0]? product.slice(0, 4).map((category) => (
            <Product key={category._id} category={category}></Product>
          )): <CircularProgress className="mx-auto mt-5" />}
        </Grid>
      </Container>
    </div>
  );
};

export default Items;
