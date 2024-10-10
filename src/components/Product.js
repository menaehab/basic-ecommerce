function Product(props) {
  const truncate = (text) => {
    if (text.length > 80) {
      return text.substring(0, 80) + "...";
    }
    return text;
  };

  return (
    <div
      className="card m-2 d-flex flex-column"
      style={{ width: "18rem", height: "28rem" }}
    >
      <img
        src={props.product.image}
        className="card-img-top"
        style={{ width: "100%", height: "12rem" }}
        alt={props.product.title}
      />
      <div
        className="card-body d-flex flex-column"
        style={{ overflow: "hidden" }}
      >
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{truncate(props.product.description)}</p>
        <a href="/#" className="btn btn-primary mt-auto">
          Explore
        </a>
      </div>
    </div>
  );
}

export default Product;
