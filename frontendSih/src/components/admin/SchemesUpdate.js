import React, { useState, useEffect } from "react";
import { GetSchemesById, UpdateSchemes } from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";
const token = isAuthenticated();

export default function SchemesUpdate({ match }) {
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
    author: isAdmin(),
  });

  useEffect(() => {
    GetSchemesById(match.params.id).then((data) => {
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

  const {
    name,
    type,
    eligibilityIncome,
    eligibilityCaste,
    eligibilityAgeUpperBound,
    eligibilityAgeLowerBound,
    description,
    url,
    gender,
  } = scheme;

  const handleChange = (name) => (event) => {
    setScheme({ ...scheme, error: false, [name]: event.target.value });
    console.log(scheme);
  };

  const onclickHandler = (event) => {
    event.preventDefault();
    UpdateSchemes(token, match.params.id, scheme).then((res) =>
      alert("Scheme has been updated")
    );
  };

  const form = () => {
    return (
      <div className="container">
        <h2 className="my-4">Update Scheme here</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
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
            onClick={onclickHandler}
            className="btn btn-outline-success mb-3"
          >
            Update Scheme
          </button>
        </form>
      </div>
    );
  };

  return <div className="container">{form()}</div>;
}
