function Product(props) {
  const truncate = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
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
        <h5 className="card-title">{truncate(props.product.title, 30)}</h5>
        <p className="card-text">{truncate(props.product.description, 80)}</p>
        <a href="/#" className="btn btn-primary mt-auto">
          Explore
        </a>
      </div>
    </div>
  );
}

export default Product;
