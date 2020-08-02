import React, { useState } from "react";
import { createScheme } from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";

const SchemesAdd = () => {
  const [scheme, setScheme] = useState({
    name: "",
    type: "0",
    eligibilityIncome: "",
    eligibilityCaste: "0",
    state: "0",
    eligibilityAgeUpperBound: "",
    eligibilityAgeLowerBound: "",
    description: "",
    url: "",
    gender: "0",
    createdScheme: "",
    author: isAdmin(),
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
    createdScheme,
  } = scheme;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (name) => (event) => {
    setScheme({ ...scheme, error: false, [name]: event.target.value });
  };

  const token = isAuthenticated();

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    if (
      name === "" ||
      type === "" ||
      eligibilityIncome === "" ||
      eligibilityCaste === "" ||
      eligibilityAgeUpperBound === "" ||
      eligibilityAgeLowerBound === "" ||
      description === "" ||
      gender === ""
    ) {
      alert("All fields are required, except URL");
    } else
      createScheme(token, scheme).then((data) => {
        console.log(data);
        if (data?.error) {
          setError(true);
        } else {
          if (data.status === "true") setSuccess(true);
          else setError("Duplicate Scheme");
          setScheme({
            ...scheme,
            createdScheme: name,
            name: "",
            type: "",
            eligibilityIncome: "",
            eligibilityCaste: "0",
            state: "0",
            eligibilityAgeUpperBound: "",
            eligibilityAgeLowerBound: "",
            description: "",
            url: "",
            gender: "0",
          });
        }
      });
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdScheme ? "" : "none" }}
      >
        {createdScheme} created !
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const form = () => {
    return (
      <div className="container">
        <h2 className="my-4">Add Scheme here</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
              required
            />
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Caste</label>
                <select
                  class="form-control"
                  value={eligibilityCaste}
                  onChange={handleChange("eligibilityCaste")}
                >
                  <option value="0">Gen</option>
                  <option value="1">OBC</option>
                  <option value="2">ST/SC</option>
                  <option value="3">ST/SC and OBC</option>
                  <option value="4">All castes</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label> Gender(s)</label>
                <select
                  value={gender}
                  onChange={handleChange("gender")}
                  class="form-control"
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                  <option value="2">Trans</option>
                  <option value="3">All</option>
                  <option value="4">Others</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Type</label>
                <select
                  class="form-control"
                  value={type}
                  onChange={handleChange("type")}
                >
                  <option value="0">Education</option>
                  <option value="1">Agriculture</option>
                  <option value="2">Employment</option>
                  <option value="3">Health & Family Welfare</option>
                  <option value="4">Housing</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Eligibility Age Lower Bound</label>
            <input
              onChange={handleChange("eligibilityAgeLowerBound")}
              type="number"
              className="form-control"
              placeholder="Eligibility Age Lower Bound"
              value={eligibilityAgeLowerBound}
            />
          </div>

          <div className="form-group">
            <label>Eligibility Age Upper Bound</label>
            <input
              onChange={handleChange("eligibilityAgeUpperBound")}
              type="number"
              className="form-control"
              placeholder="Eligibility Age Upper Bound"
              value={eligibilityAgeUpperBound}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Eligibility Income</label>
                <input
                  onChange={handleChange("eligibilityIncome")}
                  type="number"
                  className="form-control"
                  placeholder="Eligibility Income"
                  value={eligibilityIncome}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>URL</label>
                <input
                  onChange={handleChange("url")}
                  type="url"
                  className="form-control"
                  placeholder="URL(if any)"
                  value={url}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success mb-3"
          >
            Add Scheme
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {errorMessage()}
      {successMessage()}
      {form()}
    </div>
  );
};

export default SchemesAdd;
