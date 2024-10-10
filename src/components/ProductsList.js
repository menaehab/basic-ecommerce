import Product from "./Product";
import { useEffect, useState } from "react";

function ProductsList() {
  const api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategory = () => {
    fetch(`${api}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (cat) => {
    fetch(`${api}/category/${cat}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  return (
    <>
      <h1 className="text-center p-3">Our Products</h1>
      <div className="container">
        <button className="btn btn-primary m-2" onClick={getProducts}>
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              className="btn btn-primary m-2"
              key={cat}
              onClick={() => getProductInCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
