import React, { useEffect, useState } from "react";
import { GetAllSchemes } from "./helper/scheme";
import SchemeCard from "./SchemeCard";

const AllSchemes = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    GetAllSchemes().then((res) => {
      setDataa(res);
    });
  }, []);

  return (
    <div className="text-center border-top py-3">
      <h1 className="display-4 my-5">All Schemes</h1>
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
