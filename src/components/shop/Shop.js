import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { displayData, storeData } from "../Database/fakedb";
import useCart from "../hoo/UseCart";
import Product from "../product/Product";
import "./shop.css";

const Shop = () => {
  const [product, getProduct] = useState([]);
  const [cart, setCart] = useCart();
  const [search, setSearch] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [Page, setPage] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch(
      `https://obscure-basin-04556.herokuapp.com/products?page=${Page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        getProduct(data.products);
        setSearch(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [Page]);

  useEffect(() => {
    if (product.length) {
      const storedData = displayData();
      const savedCart = [];
      for (const key in storedData) {
        const produc = product.find((pKey) => pKey.key === key);
        if (produc) {
          produc.quantity = storedData[key];
          savedCart.push(produc);
        }
      }
      setCart(savedCart);
    }
  }, [product]);
  function addProduct(product) {
    const exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const pro = cart.filter((pd) => pd.key !== product.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...pro, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    storeData(product.key);
  }
  function searchItem(event) {
    const searchText = event.target.value;
    const searchProduct = product.filter((proc) =>
      proc.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearch(searchProduct);
  }
  return (
    <div>
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={12} sm={12}>
          <div className="search-container">
            <input
              type="text"
              onChange={searchItem}
              placeholder="Search Your Product"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={9} sm={9} className="border-end">
          {search[0] ? (
            search.map((product) => (
              <Product key={product.key} products={product} add={addProduct}>
                {" "}
              </Product>
            ))
          ) : (
            <CircularProgress className="ms-5 mt-5" />
          )}
        </Grid>
        <Grid item xs={12} md={3} sm={3} className="text-md-start text-center ">
          <Box className="sticky-top top-50">
            <Cart cart={cart}>
              <Link to="/order">
                <Button
                  className="py-1 px-5 border-0 cart-button"
                  style={{ backgroundColor: "goldenrod" }}
                >
                  Review Order
                </Button>{" "}
              </Link>
            </Cart>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <div className="pagination d-flex flex-wrap flex-md-nowrap mx-auto w-50 my-5">
            {[...Array(pageCount).keys()].map((number) => (
              <Button
                key={number}
                onClick={() => setPage(number)}
                className={number === Page ? "selected" : ""}
                variant="outline-warning"
              >
                {number + 1}
              </Button>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shop;
