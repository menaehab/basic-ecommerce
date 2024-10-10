import "./Carousel.css";
function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://scontent.fcai20-2.fna.fbcdn.net/v/t1.6435-9/106397686_10159687253384918_4166391731334777725_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=-UkxWHkJLYEQ7kNvgFp_XR3&_nc_ht=scontent.fcai20-2.fna&_nc_gid=AMi2Mb1rTUGsWYNhkykNgqW&oh=00_AYCPyy5YkgbXZWo9PV4d1BlgqfGIUIbhDKt7m38eZottLQ&oe=672F270B"
            className="d-block w-100 height-600"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/132/251/non_2x/smart-watch-horizontal-poster-vector.jpg"
            className="d-block w-100 height-600"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/05/KV_Big-TV-days-1920x1080.jpg"
            className="d-block w-100 height-600"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
