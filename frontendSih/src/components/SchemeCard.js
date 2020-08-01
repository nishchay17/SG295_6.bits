import React from "react";
import { Link } from "react-router-dom";

const type = [
  "Education",
  "Agriculture",
  "Employment",
  "Health & Family Welfare",
  "Housing",
];

export default function SchemeCard(props) {
  return (
    <div
      className="card col-md-5 m-1 mt-md-5 col-12"
      style={{ backgroundColor: "#ccc" }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {type[props.data.type % type.length]}
        </h6>
        <p className="card-text">{props.data.description}</p>
        <div className="card-title">
          <Link
            className="btn btn-outline-success"
            to={`/scheme/${props.data._id}`}
          >
            <span className="">Learn more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
