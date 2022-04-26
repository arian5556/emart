import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  return [product];
};
export default Products;
