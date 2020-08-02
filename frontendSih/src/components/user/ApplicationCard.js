import React, { useEffect, useState } from "react";
import { GetScheme } from "../helper/scheme";
const state = ["pending", "done", "rejected"];
const colour = [
  "badge badge-pill badge-warning",
  "badge badge-pill badge-success",
  "badge badge-pill badge-danger",
];

export default function ApplicationCard(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    GetScheme(props.data.schemeId)
      .then((scheme) => {
        setName(scheme[0].name);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card col-md-4 m-1 col-12">
      <div className="card-body">
        <h5 className="card-title">Application status</h5>
        <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
        <p className="card-text"></p>
        <span class={colour[props.data.state]}>{state[props.data.state]}</span>
      </div>
    </div>
  );
}
