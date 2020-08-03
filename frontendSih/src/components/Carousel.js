import React from "react";
import poster3 from "../assets/covid.png";
import poster2 from "../assets/howto.png";
// import "./style/Carousel.style.css";

export default function Carousel() {
  return (
    <div className="">
      <div id="carousel" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 " src={poster2} alt="First slide" />
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={poster3} alt="Secound slide" />
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
        </ol>
      </div>
    </div>
  );
}
