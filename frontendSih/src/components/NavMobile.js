import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated, isAdmin } from "./helper/auth";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import i18next from "../i18n";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "green" };
  } else {
    return { color: "black" };
  }
};

const Nav = ({ history }) => {
  const { t } = useTranslation();
  const handleClick = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <div>
      <ul className="nav nav-tabs d-none d-flex d-md-none fixed-top bg-white border">
        <li className="navbar-brand ml-2">Scheme App</li>
        <div className="btn-group ml-auto mr-3 border">
          <button
            className="btn btn-primary btn-sm "
            onClick={() => handleClick("en")}
          >
            English
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleClick("hi")}
          >
            हिन्दी
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleClick("ne")}
          >
            नेपाली
          </button>
        </div>
      </ul>

      <ul
        className="nav nav-tabs d-none d-flex d-md-none fixed-bottom bg-white"
        style={{ border: "black 2px solid" }}
      >
        <li className="border nav-item my-auto">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            {t("Home")}
          </Link>
        </li>
        {isAuthenticated() &&
        !isAdmin() && ( //&& isAuthenticated().user.role === 0
            <li className="border nav-item">
              <Link
                style={currentTab(history, "/apply")}
                className="nav-link"
                to="/apply"
              >
                {t("Apply")}
              </Link>
            </li>
          )}

        {isAuthenticated() &&
        isAdmin() && ( //&& isAuthenticated().user.role === 1
            <li className="nav-item border">
              <Link
                style={currentTab(history, "/admin/dashboard")}
                className="nav-link"
                to="/admin/dashboard"
              >
                {t("Dashboard")}
              </Link>
            </li>
          )}

        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item border">
              <Link
                style={currentTab(history, "/register")}
                className="nav-link"
                to="/register"
              >
                {t("Signup")}
              </Link>
            </li>
            <li className="nav-item border">
              <Link
                style={currentTab(history, "/login")}
                className="nav-link"
                to="/login"
              >
                {t("Signin")}
              </Link>
            </li>
          </Fragment>
        )}

        <li className="nav-item border">
          <Link
            style={currentTab(history, "/about")}
            className="nav-link"
            to="/about"
          >
            {t("About")}
          </Link>
        </li>

        {isAuthenticated() && (
          <li className="nav-item border">
            <span
              className="nav-link text-danger"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              {t("Sign Out")}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Nav);
