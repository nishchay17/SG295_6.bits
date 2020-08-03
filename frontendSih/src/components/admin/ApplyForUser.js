import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ApplyForUser() {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    password: "test",
    username: "test",
    gender: 1,
    name: "test",
    lastName: "test",
    state: 0,
    caste: 1,
    age: 1,
    aadhaarNumber: "253748587712",
    moblieNumber: "2537485877",
    income: 0,
    error: "",
    success: false,
  });
  const {
    password,
    username,
    name,
    gender,
    lastName,
    state,
    caste,
    age,
    aadhaarNumber,
    moblieNumber,
    income,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello there");
  };
  const signUpForm = () => {
    return (
      <div className="container my-4 mx-auto row">
        <div className="col-md-6 offset-md-3 col-12">
          <form>
            {/* <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        className="form-control border"
                        onChange={handleChange("name")}
                        type="text"
                        value={name}
                      />
                    </div>
                  </div>
    
                  <div className="col">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={handleChange("lastName")}
                        value={lastName}
                      />
                    </div>
                  </div>
                </div>
    
                <div className="form-group">
                  <label>Moblie Number</label>
                  <input
                    className="form-control"
                    onChange={handleChange("moblieNumber")}
                    value={moblieNumber}
                    type="tel"
                  />
                </div>
    
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        className="form-control"
                        onChange={handleChange("age")}
                        type="number"
                        value={age}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label> Gender</label>
                      <select
                        class="form-control"
                        value={gender}
                        onChange={handleChange("gender")}
                      >
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                        <option value="2">Trans</option>
                        <option value="4">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Caste</label>
                      <select
                        class="form-control"
                        value={caste}
                        onChange={handleChange("caste")}
                      >
                        <option value="0">Gen</option>
                        <option value="1">OBC</option>
                        <option value="2">ST/SC</option>
                      </select>
                    </div>
                  </div>
                </div> */}
            <div className="form-group">
              <label>{t("Aadhaar Number")}</label>
              <input
                className="form-control"
                onChange={handleChange("aadhaarNumber")}
                value={aadhaarNumber}
                type="number"
              />
            </div>

            <div className="form-group">
              <label>{t("Income")}</label>
              <input
                className="form-control"
                onChange={handleChange("income")}
                type="number"
                value={income}
              />
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label> {t("Username")}</label>
                  <input
                    className="form-control"
                    onChange={handleChange("username")}
                    type="text"
                    value={username}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>{t("Password")}</label>
                  <input
                    className="form-control"
                    onChange={handleChange("password")}
                    type="password"
                    value={password}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-outline-success btn-block"
            >
              {t("Apply")}
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-3 my-5 text-center">
      <h4>Apply For the User</h4>
      {signUpForm()}
    </div>
  );
}
