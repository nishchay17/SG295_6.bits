import React from "react";
import poster3 from "../asset/poster3.png";
// import "./style/Carousel.style.css";

export default function Carousel() {
  return (
    <div className="container-fluid">
      <div id="carousel" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              src="https://www.bangalorebuzz.in/wp-content/uploads/2018/05/Untitled-7-741x422.jpg"
              alt="First slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://trendingonlinenow.in/wp-content/uploads/2019/09/Government-Schemes-for-Development-of-Agriculture-in-India-758x437.jpg"
              alt="Secound slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.infog.in/wp-content/uploads/2019/07/p0028-pradhan-mantri-yuva-yojana-kya-hai-hindi.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/87/10/ea/8710eaa22c8407aae718eb9d01597646.png"
              alt="Fourth slide"
            />
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
        </ol>
      </div>
    </div>
  );
}
