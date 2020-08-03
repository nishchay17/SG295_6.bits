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
      <ul className="nav nav-tabs d-none d-flex d-md-none bg-white border">
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
    </div>
  );
};

export default withRouter(Nav);
