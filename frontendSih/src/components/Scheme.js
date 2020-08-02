import React, { useEffect, useState } from "react";
import { GetScheme } from "./helper/scheme";
import { useTranslation } from "react-i18next";

export default function Scheme({ match }) {
  const { t } = useTranslation();

  const types = [
    t("Education"),
    t("Agriculture"),
    t("Employment"),
    t("Health&FamilyWelfare"),
    t("Housing"),
  ];
  const genders = [
    t("Male"),
    t("Female"),
    t("Trans"),
    t("All Gender"),
    t("other"),
  ];
  const castes = [
    t("Gen"),
    t("OBC"),
    t("ST/SC"),
    t("ST/SC and OBC"),
    t("All Castes"),
  ];
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
    author: "",
  });

  const {
    name,
    type,
    eligibilityIncome,
    eligibilityCaste,
    state,
    eligibilityAgeUpperBound,
    eligibilityAgeLowerBound,
    description,
    url,
    gender,
  } = scheme;

  useEffect(() => {
    GetScheme(match.params.id).then((data) => {
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

  const card = () => {
    return (
      <div
        className="card text-center m-4"
        style={{ backgroundColor: "#bef7f7" }}
      >
        <div className="card-body">
          <h5 className="card-title">{t(name)}</h5>
          <p className="card-text">{t(description)}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {t("Type")}: {types[type % types.length]}
          </li>
          <li className="list-group-item">
            {t("Age")}: {eligibilityAgeLowerBound} - {eligibilityAgeUpperBound}
          </li>
          <li className="list-group-item">
            {t("Eligibility Income")}: {eligibilityIncome}
          </li>
          <li className="list-group-item">
            {t("Eligibility Caste")}- {castes[eligibilityCaste % castes.length]}
          </li>
          <li className="list-group-item">
            {t("Eligibility Gender")}- {genders[gender % genders.length]}
          </li>
          <li className="list-group-item">
            {t("URL")}- {url}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="m-4">{t("Scheme Details")}</h1>
      {card()}
    </div>
  );
}
