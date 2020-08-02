import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SchemeCard(props) {
  const { t } = useTranslation();
  const type = [
    t("Education"),
    t("Agriculture"),
    t("Employment"),
    t("Health & Family Welfare"),
    t("Housing"),
  ];
  return (
    <div
      className="card col-md-5 m-1 mt-md-5 col-12"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="card-body">
        <h5 className="card-title">{t(props.data.name)}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {type[props.data.type % type.length]}
        </h6>
        <p className="card-text">{t(props.data.description)}</p>
        <div className="card-title">
          <Link
            className="btn btn-outline-success"
            to={`/scheme/${props.data._id}`}
          >
            <span className="">{t("Learn more")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
