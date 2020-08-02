import React, { useEffect, useState } from "react";
import { GetAllSchemesAdmin } from "./adminHelper/apiCalls";
import SchemeCard from "./SchemeCardAdmin";
import { isAuthenticated } from "../helper/auth";
import { DeleteSchemes } from "./adminHelper/apiCalls";

const AllSchemes = () => {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    const token = isAuthenticated();
    GetAllSchemesAdmin(token).then((res) => {
      setDataa(res);
    });
  }, []);

  const handleDelete = (id) => {
    const token = isAuthenticated();
    DeleteSchemes(token, id).then((res) => {
      alert(res.name + " deleted!");
      const data = dataa.filter((scheme) => {
        return id !== scheme._id;
      });
      setDataa(data);
    });
  };

  return (
    <div className="text-center border-top py-3">
      <h1 className="my-5">All of your Schemes</h1>
      <div className="container mx-auto">
        <div className="row justify-content-around">
          {dataa.map((data, index) => {
            return (
              <SchemeCard data={data} handleClick={handleDelete}></SchemeCard>
            );
          })}
        </div>
      </div>
      <div className="container boarder-top my-5 py-4">SIH2020-6bits</div>
    </div>
  );
};

export default AllSchemes;
