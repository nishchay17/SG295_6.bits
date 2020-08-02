import React, { useEffect, useState } from "react";
import { ReviewList } from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";

import ApplicationCard from "./ApplicationCard";
const token = isAuthenticated();
const id = isAdmin();

export default function ApplicationReview() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    ReviewList(token, id).then((res) => {
      setData(res);
      setIsloading(false);
    });
  }, []);

  const loading = () => {
    return <div class="spinner-border text-success"></div>;
  };

  return (
    <div className="text-center border-top py-3">
      <h1 className="display-4 my-3">All Applications</h1>
      <p>Review this Applications</p>
      {isloading && loading()}
      <div className="container mx-auto">
        <div className="row justify-content-around">
          {data &&
            data.map((data, index) => {
              return (
                <ApplicationCard data={data} key={index}></ApplicationCard>
              );
            })}
        </div>
      </div>
      <div className="container boarder-top my-3 py-2">SIH2020-6bits</div>
    </div>
  );
}
