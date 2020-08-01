import React from "react";
import { Link } from "react-router-dom";

const type = [
  "Education",
  "Agriculture",
  "Employment",
  "Health & Family Welfare",
  "Housing",
];
const gender = ["Male", "Female", "Trans", "All Gender", "other"];

export default function SchemeCardAdmin(props) {
  const deleteIt = () => {
    props.handleClick(props.data._id);
  };

  return (
    <div
      className="card col-md-5 m-1 mt-md-5 col-12"
      style={{ backgroundColor: "#bef7f7" }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {type[props.data.type % type.length]}
        </h6>
        <h6 className="card-text">
          Age: {props.data.eligibilityAgeLowerBound} -{" "}
          {props.data.eligibilityAgeUpperBound}{" "}
        </h6>
        <h6 className="card-text">
          For Gender: {gender[props.data.gender % gender.length]}{" "}
        </h6>
        <h6 className="card-text">URL: {props.data.url}</h6>

        <p className="card-text">{props.data.description}</p>
        <Link
          className="btn btn-outline-primary"
          to={`/admin/scheme/update/${props.data._id}`}
        >
          <span className="">Update</span>
        </Link>
        <button
          className="btn btn-outline-danger mx-1"
          onClick={() => deleteIt()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
