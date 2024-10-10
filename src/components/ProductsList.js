import Product from "./Product";
import { useEffect, useState } from "react";

function ProductsList() {
  const api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <div className="row">
          {products.slice(0, 8).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
