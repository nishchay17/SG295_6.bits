import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Males", "Females", "Trans", "Others"],
  datasets: [
    {
      label: "Gender wise numbers",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "orange",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [3, 5, 1, 0],
      backgroundColor: ["red", "blue", "yellow", "green"],
    },
  ],
};

const PieChart = () => {
  return (
    <div
      className="p-5"
      style={{
        height: window.innerHeight / 2,
        width: window.innerWidth / 2,
      }}
    >
      <h4>Gender wise numbers</h4>

      <Pie data={data} options={{ responsive: true }} />
    </div>
  );
};

export default PieChart;
