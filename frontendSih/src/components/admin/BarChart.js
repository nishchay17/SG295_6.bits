import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: [
    "District 1",
    "District 2",
    "District 3",
    "District 4",
    "District 5",
  ],
  datasets: [
    {
      label: "District wise numbers",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const chart = () => {
  return (
    <div
      className="p-5"
      style={{
        height: window.innerHeight / 2,
        width: window.innerWidth / 2,
      }}
    >
      <h4>Numbers of application in District</h4>

      <HorizontalBar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default chart;
