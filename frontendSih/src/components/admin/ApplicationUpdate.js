import React, { useState, useEffect } from "react";
import {
  GetSingleApplication,
  GetSchemesById,
  GetUserById,
  ChangeApplicationState,
} from "./adminHelper/apiCalls";
import { isAuthenticated, isAdmin } from "../helper/auth";
import { Link } from "react-router-dom";

const token = isAuthenticated();
const id = isAdmin();
const Genders = ["Male", "Female", "Trans", "All Gender", "other"];
const Castes = ["Gen", "OBC", "ST/SC", "ST/SC and OBC", "All castes"];

export default function ApplicationUpdate({ match }) {
  const applicationId = match.params.id;
  const [state, setState] = useState("");
  const [application, setApplication] = useState({});
  const [user, setUser] = useState({});
  const [scheme, setScheme] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    GetSingleApplication(token, applicationId).then((res) => {
      setApplication(res);
      setState(res.state);
      GetSchemesById(res.schemeId).then((incomingScheme) => {
        setScheme(incomingScheme[0]);
        GetUserById(token, res.userId).then((user) => {
          setUser(user[0]);
          setIsloading(false);
        });
      });
    });
  }, []);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    ChangeApplicationState(token, applicationId, { state })
      .then((res) => {
        setError(false);
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
      });
  };

  const form = () => {
    return (
      <div className="container mt-3">
        <form class="form-inline">
          <div className="form-group  mx-auto">
            <select
              value={state}
              onChange={handleChange}
              class="form-control m-2"
            >
              <option value="0">Pending</option>
              <option value="1">Done</option>
              <option value="2">Rejected</option>
            </select>
            <button
              type="submit"
              onClick={onsubmit}
              className="btn btn-outline-success m-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  const userCard = () => {
    return (
      <div className="card">
        <div className="card-header">User data</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Age : {user.age}</li>
          <li className="list-group-item">Income : {user.income}</li>
          <li className="list-group-item">Caste : {Castes[user.caste]}</li>
          <li className="list-group-item">Gender : {Genders[user.gender]}</li>
        </ul>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: success ? "" : "none" }}
      >
        updated!
      </div>
    );
  };

  const loading = () => {
    return <div class="spinner-border text-success m-3"></div>;
  };

  return (
    <div className="text-center border-top py-3">
      <h1 className="display-4 my-3">Application Review</h1>
      <p>Review this Application</p>
      {isloading && loading()}
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-3"> {userCard()}</div>
        <div className="col-12 col-md-3">
          <div className="row">
            <div className="col-12 col-md-12">
              <Link
                className="btn btn-outline-success"
                to={`/scheme/${scheme._id}`}
              >
                <span className="">Scheme Info, Click here</span>
              </Link>
            </div>
            <div className="col-12 col-md-12">{form()}</div>
          </div>
        </div>
      </div>
      {successMessage()}
    </div>
  );
}
