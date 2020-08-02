import React from "react";
import { Link } from "react-router-dom";

const type = [
  "Education",
  "Agriculture",
  "Employment",
  "Health & Family Welfare",
  "Housing",
];

export default function ApplySchemeCard(props) {
  return (
    <div className="card col-md-4 m-1 col-12">
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {type[props.data.type % type.length]}
        </h6>
        <p className="card-text">{props.data.description}</p>
        <Link
          className="btn btn-outline-success"
          to={`/apply/${props.data._id}`}
        >
          <span className="">Learn more</span>
        </Link>
      </div>
    </div>
  );
}
