import React from "react";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
// import "./style/Carousel.style.css";

export default function Carousel() {
  return (
    <div className="row">
      <div className="col-12 col-md-6 p-0 p-md-1">
        <div id="carousel1" className="carousel slide " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 " src={a} alt="First slide" />
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={b} alt="Secound slide" />
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel1" data-slide-to="1"></li>
          </ol>
        </div>
      </div>

      <div className="col-12 col-md-6 p-0 p-md-1">
        <div id="carousel2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 " src={c} alt="First slide" />
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={d} alt="Secound slide" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={f}
                onClick={() => console.log("hello")}
                alt="Secound slide"
              />
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carousel2" data-slide-to="0" class="active"></li>
            <li data-target="#carousel2" data-slide-to="1"></li>
            <li data-target="#carousel2" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
