import React, { useEffect, useState } from "react";
import { GetAllSchemes } from "./helper/scheme";
import SchemeCard from "./SchemeCard";
import logoSikkim from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";
import Carousel2 from "./Carousel2";

const AllSchemes = () => {
  const { t } = useTranslation();
  const [number, setNumber] = useState(0);
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    GetAllSchemes().then((res) => {
      setDataa(res);
      setNumber(res.length);
    });
  }, []);

  return (
    <div className="text-center border-top py-4">
      <div className="row justify-center my-4">
        <h5 className="col-12 col-md-6 m-auto">
          {t("Total number of schemes in this portal")} <br />
          <h3 className="m-2" style={{ color: "green" }}>
            {number}
          </h3>
        </h5>
        <div className="col-12 col-md-6">
          <img src={logoSikkim} className="img-fluid" alt="Sikkim logo"></img>
        </div>
      </div>
      <Carousel2></Carousel2>
      <h1 className="display-4 my-5">{t("All Schemes")}</h1>
      <div className="container mx-auto">
        <div className="row justify-content-around">
          {dataa.length &&
            dataa.map((data, index) => {
              return <SchemeCard data={data}></SchemeCard>;
            })}
        </div>
      </div>
      <div className="container boarder-top my-3 py-2">SIH2020-6bits</div>
    </div>
  );
};

export default AllSchemes;
