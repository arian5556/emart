import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://obscure-basin-04556.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  return [product];
};
export default Products;
