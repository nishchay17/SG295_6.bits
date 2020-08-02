import React, { useEffect, useState } from "react";
import { isAuthenticated, getId } from "../helper/auth";
import { Applications } from "./helper/apiCalls";
import ApplicationCard from "./ApplicationCard";
const token = isAuthenticated();
const id = getId();

export default function Application() {
  const [data, setData] = useState({});
  useEffect(() => {
    Applications(token, id).then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className="text-center border-top py-3">
      <h1 className="display-4 my-3">All of your Applications</h1>
      <p>All of your Applications that you applied</p>
      <div className="container mx-auto">
        <div className="row justify-content-around">
          {data?.length &&
            data.map((data, index) => {
              return (
                <ApplicationCard data={data} key={index}></ApplicationCard>
              );
            })}
        </div>
      </div>
      <div className="container boarder-top my-5 py-4">SIH2020-6bits</div>
    </div>
  );
}
