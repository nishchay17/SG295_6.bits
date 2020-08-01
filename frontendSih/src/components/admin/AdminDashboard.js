import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
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
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        {adminLeftSide()}
        <h1 className="text-center pt-4">Hello Admin</h1>
      </div>
    </div>
  );
}
