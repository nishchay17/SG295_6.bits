import React from "react";
import "./style/Footer.style.css";

const Footer = () => {
  return (
    <div className="container-fluid mt-auto">
      <footer className="py-1 bg-dark">
        <div className="row">
          <div className="col col-sm-2" />

          <div className="col col-sm-4">
            <ul className="list list-unstyled  mx-4 text-center">
              <li className="list-item ">
                <a href="">About</a>
              </li>
              <li className="list-item">
                <a href="">Team</a>
              </li>
              <li className="list-item">
                <a href="">Work</a>
              </li>
              <li className="list-item">
                <a href="">Home</a>
              </li>
            </ul>
          </div>
          <div className="col col-sm-4">
            <ul className="list list-unstyled mx-4 text-center">
              <li className="list-item py-1">
                <i class="fa fa-facebook " aria-hidden="true" />
              </li>
              <li className="list-item py-1">
                <i class="fa fa-twitter" aria-hidden="true" />
              </li>
              <li className="list-item py-1">
                <i class="fa fa-instagram" aria-hidden="true" />
              </li>
            </ul>
          </div>
          <div className="col" />
        </div>
        <div className=" container-fluid py-1 text-center">
          <a href="https://www.sih.gov.in/" className="text-white">
            SMART INDIA HACKTHON 2020
          </a>
        </div>

        <div className="container-fluid text-center bg-success ">
          <p>
            {" "}
            © 2020 copyright{" "}
            <a href="" className="text-dark">
              6 bits
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
