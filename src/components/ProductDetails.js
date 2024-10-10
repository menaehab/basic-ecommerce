import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleProduct from "./singleProduct";
function ProductDetails() {
  const api = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api}/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  return <SingleProduct product={product} />;
}

export default ProductDetails;
