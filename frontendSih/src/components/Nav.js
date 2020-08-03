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
      <ul className="nav nav-tabs d-none d-md-flex d-lg-flex">
        <li className="nav-item" style={{ border: "balck 1px solid" }}>
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            {t("Home")}
          </Link>
        </li>
        <li className="nav-item" style={{ border: "balck 1px solid" }}>
          <Link
            style={currentTab(history, "/helpdesk")}
            className="nav-link"
            to="/helpdesk"
          >
            {t("Help Desk")}
          </Link>
        </li>

        {isAuthenticated() &&
        !isAdmin() && ( //&& isAuthenticated().user.role === 0
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
              <Link
                style={currentTab(history, "/register")}
                className="nav-link"
                to="/register"
              >
                {t("Signup")}
              </Link>
            </li>
            <li className="nav-item">
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

        <li className="nav-item">
          <Link
            style={currentTab(history, "/about")}
            className="nav-link"
            to="/about"
          >
            {t("About")}
          </Link>
        </li>

        {isAuthenticated() && (
          <li className="nav-item">
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
        <div className="btn-group ml-auto mr-3">
          <button className="btn btn-primary" onClick={() => handleClick("en")}>
            English
          </button>
          <button className="btn btn-primary" onClick={() => handleClick("hi")}>
            हिन्दी
          </button>
          <button className="btn btn-primary" onClick={() => handleClick("ne")}>
            नेपाली
          </button>
        </div>
      </ul>
    </div>
  );
};

export default withRouter(Nav);
