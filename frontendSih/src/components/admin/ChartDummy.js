import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
  datasets: [
    {
      label: "Number of Application",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 2, 4, 3, 5, 7, 10],
    },
  ],
};

export default class LineDemo extends Component {
  render() {
    return (
      <div className="p-5">
        <h4>Daily numbers</h4>
        <div
          style={{
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
          }}
        >
          <Line ref="chart" data={data} options={{ responsive: true }} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
  }
}
