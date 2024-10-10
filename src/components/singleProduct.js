import "./singleProduct.css";
function SingleProduct(props) {
  const { product } = props;
  const { title, image, rating, description, price } = product;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={image}
            alt={title}
            className="product-image"
            style={{ width: "500px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{title}</h2>
          <h4 className="text-success">${price}</h4>
          {rating ? (
            <p className="rating">
              <span>
                {Math.round(rating.rate) === 1 && "⭐☆☆☆☆"}
                {Math.round(rating.rate) === 2 && "⭐⭐☆☆☆"}
                {Math.round(rating.rate) === 3 && "⭐⭐⭐☆☆"}
                {Math.round(rating.rate) === 4 && "⭐⭐⭐⭐☆"}
                {Math.round(rating.rate) === 5 && "⭐⭐⭐⭐⭐"}
              </span>{" "}
              ({rating.rate} / 5) - {rating.count} ratings
            </p>
          ) : (
            <p>No ratings available</p>
          )}
          <p>{description}</p>
          <button className="btn btn-primary btn-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
