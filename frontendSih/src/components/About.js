import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="m-5 row">
      <div>
        <h1 className="col-12 col-md-8 offset-md-2 mb-4">{t("Home")}</h1>
        <p className="col-md-9 offset-md-2 col-12">{t("abbout")}</p>
      </div>
    </div>
  );
}
