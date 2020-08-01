import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./helper/auth";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { username, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const submit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ username, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      .catch(() => {
        console.log("signin failed");
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/" />;
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const form = () => {
    return (
      <div className="container row mx-auto mb-5">
        <h2 className="my-5 col-md-12 col-12 text-center display-4">Login</h2>
        <p className="my-2 col-md-6 offset-md-3 col-12 text-center lead">
          Demo Login, to login as a normal user use: <br />
          username : nishchay2 <br />
          password : nishchay2
        </p>
        <form className="col-md-4 offset-md-4 col-12">
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              value={username}
              onChange={handleChange("username")}
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              value={password}
              onChange={handleChange("password")}
            />
          </div>
          <button onClick={submit} class="btn btn-outline-success ">
            Login
          </button>
        </form>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger col-md-6 offset-sm-3 text-center"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <div>
      {errorMessage()}
      {form()}
      {performRedirect()}
      <small></small>
    </div>
  );
}
