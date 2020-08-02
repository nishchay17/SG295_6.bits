import React, { useEffect, useState } from "react";
import { GetAllSchemesForApply } from "./helper/apiCalls";
import ApplySchemeCard from "./ApplySchemeCard";
import { isAuthenticated } from "../helper/auth";
import { Link } from "react-router-dom";
const token = isAuthenticated();

const ApplicableSchemes = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    GetAllSchemesForApply(token)
      .then((res) => {
        setDataa(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-center border-top py-3">
      <h1 className="display-4 my-5">All Schemes to apply</h1>
      <p>Given all Schemes you can apply to</p>
      <Link className="btn btn-outline-success m-3" to={`/application`}>
        <span className="">All Application</span>
      </Link>
      <div className="container mx-auto">
        <div className="row justify-content-around">
          {dataa?.length &&
            dataa.map((data, index) => {
              return <ApplySchemeCard data={data}></ApplySchemeCard>;
            })}
        </div>
      </div>
      <div className="container boarder-top my-5 py-4">SIH2020-6bits</div>
    </div>
  );
};

export default ApplicableSchemes;
