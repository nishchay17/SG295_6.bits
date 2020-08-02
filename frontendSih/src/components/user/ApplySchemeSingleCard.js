import React, { useEffect, useState } from "react";
import { GetScheme } from "../helper/scheme";
import { isAuthenticated } from "../helper/auth";
import { ApplyIt } from "./helper/apiCalls";

const token = isAuthenticated();
const types = [
  "Education",
  "Agriculture",
  "Employment",
  "Health & Family Welfare",
  "Housing",
];
const genders = ["Male", "Female", "Trans", "All Gender", "other"];
const castes = ["Gen", "OBC", "ST/SC", "ST/SC and OBC", "All castes"];

export default function Scheme({ match }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [scheme, setScheme] = useState({
    name: "",
    type: "",
    eligibilityIncome: "",
    eligibilityCaste: "",
    state: "0",
    eligibilityAgeUpperBound: "",
    eligibilityAgeLowerBound: "",
    description: "",
    url: "",
    gender: "",
    author: "",
  });

  const {
    name,
    type,
    eligibilityIncome,
    eligibilityCaste,
    state,
    eligibilityAgeUpperBound,
    eligibilityAgeLowerBound,
    description,
    url,
    gender,
  } = scheme;

  useEffect(() => {
    GetScheme(match.params.id).then((data) => {
      data = data[0];
      setScheme({
        ...scheme,
        name: data.name,
        type: data.type,
        eligibilityIncome: data.eligibilityIncome,
        eligibilityCaste: data.eligibilityCaste,
        state: "0",
        eligibilityAgeUpperBound: data.eligibilityAgeUpperBound,
        eligibilityAgeLowerBound: data.eligibilityAgeLowerBound,
        description: data.description,
        url: data.url,
        gender: data.gender,
      });
    });
  }, []);

  const onclick = () => {
    ApplyIt(token, match.params.id)
      .then((res) => {
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
      });
  };

  const card = () => {
    return (
      <div className="card text-center m-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Type: {types[type % types.length]}
          </li>
          <li className="list-group-item">
            Age: {eligibilityAgeLowerBound} - {eligibilityAgeUpperBound}
          </li>
          <li className="list-group-item">
            Eligibility Income: {eligibilityIncome}
          </li>
          <li className="list-group-item">
            Eligibility Caste- {castes[eligibilityCaste % castes.length]}
          </li>
          <li className="list-group-item">
            Eligibility Gender- {genders[gender % genders.length]}
          </li>
          <li className="list-group-item">Eligibility URL- {url}</li>
        </ul>
        {/* <div className=""> */}
        <button
          className="btn btn-success"
          style={{ display: isAuthenticated() ? "" : "none" }}
          onClick={onclick}
        >
          Apply Now
        </button>
        {/* </div> */}
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: success ? "" : "none" }}
      >
        Appiled!
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? "" : "none" }}
      >
        Error, try again.
      </div>
    );
  };

  return (
    <div className="container">
      {errorMessage()}
      {successMessage()}
      <h1 className="m-4">Scheme Details</h1>
      {card()}
    </div>
  );
}
