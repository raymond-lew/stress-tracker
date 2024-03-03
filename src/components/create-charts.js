import React, { useEffect } from "react";
import Chart from "chart.js/auto";

export function Line(props) {
  const createChart = () => {
    let ctx = document.getElementById("myLine");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: props.label,
        datasets: [
          {
            label: props.title,
            data: props.data,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "rgba(54, 162, 235)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                padding: 100,
              },
              display: false,
            },
          ],
        },
      },
    });
  };
  useEffect(() => {
    createChart();
  });
  return (
    <div>
      <div>
        <canvas id="myLine" height="280" width="0"></canvas>
      </div>
    </div>
  );
}

export function Doughnut(props) {
  const createDoughnut = () => {
    let ctx = document.getElementById("myDoughnut");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: props.label,
        datasets: [
          {
            backgroundColor: [
              "rgba(216, 54, 138, 0.8)",
              "rgba(36, 85, 26, 0.75)",
              "rgba(225, 160, 65, 0.75)",
              "rgba(232, 58, 82, 0.75)",
              "rgba(95, 4, 17, 0.75)",
              "rgba(120, 139, 18, 0.75)",
              "rgba(161, 165, 143, 0.75)",
              "rgba(243, 41, 9, 0.75)",
              "rgba(23, 18, 69, 0.75)",
              "rgba(241, 151, 72, 0.75)",
              "rgba(248, 10, 37, 0.75)",
            ],
            borderColor: "rgba(182, 215, 168, 1)",
            data: props.data,
          },
        ],
      },
    });
  };
  useEffect(() => {
    createDoughnut();
  });
  return (
    <div>
      <div>
        <canvas id="myDoughnut" height="280" width="0"></canvas>
      </div>
    </div>
  );
}

export default { Line, Doughnut };
