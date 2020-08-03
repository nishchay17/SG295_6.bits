import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LineDemo from "./ChartDummy";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import MapHeat from "./MapHeat";
import PieChartCaste from "./PieChartCaste";
import { GetUser } from "./adminHelper/apiCalls";
import { isAuthenticated } from "../helper/auth";
const token = isAuthenticated();
let age = 0;
export default function AdminDashboard() {
  const [num, setNum] = useState(0);
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);
  const [trans, setTrans] = useState(0);
  const [Age, setAge] = useState(0);
  useEffect(() => {
    GetUser(token)
      .then((res) => {
        setNum(res.length);
        console.log(res);
        res.map((user) => {
          age = age + user.age;
        });
        setAge(age);
      })
      .catch((err) => console.log(err));
  }, []);

  const dd = () => {
    return (
      <div>
        <div style={{ backgroundColor: "#2ecc71" }}>
          <ul className="nav nav-tabs mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/admin/dashboard"
              >
                Admin Area
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  const adminLeftSide = () => {
    return (
      <div>
        <div style={{ backgroundColor: "#2ecc71" }}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/admin/scheme/new"
              >
                Create Schemes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/admin/scheme/all"
              >
                View / Manage Schemes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/review"
              >
                Review Application
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/applyforuser"
              >
                Apply for user
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        {dd()}
        {adminLeftSide()}
        <h1 className=" text-center pt-4">Admin Dashboard</h1>
        <p className="text-center" style={{ color: "red" }}>
          Number of users {num}
        </p>
        <p className="text-center" style={{ color: "red" }}>
          Avg age of users {parseInt(age / num)}
        </p>
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-12 col-md-6">
              <LineDemo />
            </div>
            <div className="col-12 col-md-6">
              <BarChart />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <PieChart />
            </div>
            <div className="col-12 col-md-6">
              <PieChartCaste />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-12 p-3">
              <MapHeat
                style={{
                  height: window.innerHeight / 2,
                  width: window.innerWidth / 2,
                }}
              />
            </div>
            <div className="col-12 col-md-12 p-3">
              <h5 className="alert alert-danger">Alert Area</h5>
              <div className="h6">Least Applied District: District 5</div>
              <div className="h6">Most Applied District: District 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
