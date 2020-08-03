import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Gen", "OBC", "ST/SC"],
  datasets: [
    {
      label: "Gender wise numbers",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "orange",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [3, 5, 4],
      backgroundColor: ["#e74c3c", "#f1c40f", "#2ecc71"],
    },
  ],
};

const PieChartCaste = () => {
  return (
    <div
      className="p-5"
      style={{
        height: window.innerHeight / 2,
        width: window.innerWidth / 2,
      }}
    >
      <h4>Caste wise numbers</h4>

      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
};

export default PieChartCaste;
