import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChart = () => {
  const data = {
    datasets: [
      {
        // Diklaim
        label: "Outer Circle",
        data: [75, 25],
        backgroundColor: ["#55B76B", "#E0E0E0"],
        borderWidth: 0,
        cutout: "50%",
      },
      {
        label: "Inner Circle",
        data: [50, 50],
        backgroundColor: ["#AEE0BD", "#E0E0E0"],
        borderWidth: 0,
        cutout: "50%",
        radius: "50%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as any,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ width: 200, height: 200 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircularChart;
