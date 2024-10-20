import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DonasiAnalisisChart = () => {
  const [mode, setMode] = useState("monthly");

  const generateRandomData = (length = 200) => {
    const data = Array.from({ length }, () => Math.floor(Math.random() * 100));

    return data;
  };

  const fullMonthlyLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fullMonthlyData = generateRandomData(200);

  const sliceMonthlyData = (data: any, labels: any) => {
    const firstNonZeroIndex = data.findIndex((value: any) => value > 0);
    const lastNonZeroIndex =
      data.length - 1 - [...data].reverse().findIndex((value) => value > 0);

    const slicedData = data.slice(firstNonZeroIndex, lastNonZeroIndex + 1);
    const slicedLabels = labels.slice(firstNonZeroIndex, lastNonZeroIndex + 1);

    return { slicedData, slicedLabels };
  };

  const { slicedData: monthlyDataTerklaim, slicedLabels: slicedMonthlyLabels } =
    sliceMonthlyData(fullMonthlyData, fullMonthlyLabels);
  const { slicedData: monthlyDataDitambahkan } = sliceMonthlyData(
    generateRandomData(200),
    fullMonthlyLabels
  );

  const monthlyData = {
    labels: slicedMonthlyLabels,
    datasets: [
      {
        label: "Terklaim",
        data: monthlyDataTerklaim,
        borderColor: "#007bff",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointBackgroundColor: "#007bff",
      },
      {
        label: "Ditambahkan",
        data: monthlyDataDitambahkan,
        borderColor: "#ff8c00",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointBackgroundColor: "#ff8c00",
      },
    ],
  };

  const yearlyData = {
    labels: ["2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Terklaim",
        data: [40, 60, 80, 100],
        borderColor: "#007bff",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointBackgroundColor: "#007bff",
      },
      {
        label: "Ditambahkan",
        data: [50, 65, 85, 95],
        borderColor: "#ff8c00",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointBackgroundColor: "#ff8c00",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: "linear", // Specify the type of the scale
        min: 0,
        max: 100,
        grid: {
          color: "#e0e0e0",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Donasi Analisis",
        align: "start",
        font: {
          size: 18,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "white",
        bodyColor: "black",
        titleColor: "green",
        titleAlign: "center",
        displayColors: false,
        padding: 10,
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            return `$${value.toLocaleString()}`;
          },
          title: function (el: any) {
            return el[0]?.label;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  const verticalLinePlugin = {
    id: "verticalLine",
    afterDraw: (chart: any) => {
      // Check if the chart type has a y-axis before proceeding
      if (
        !chart.scales?.y ||
        !chart.tooltip._active ||
        !chart.tooltip._active.length
      ) {
        return; // Exit if there's no y-axis or no active tooltip
      }

      const ctx = chart.ctx;
      const activePoint = chart.tooltip._active[0];
      const x = activePoint.element.x;
      const y = activePoint.element.y;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0, 123, 255, 0.2)";
      ctx.stroke();
      ctx.restore();
    },
  };

  ChartJS.register(verticalLinePlugin);

  const handleModeChange = (event: any) => {
    setMode(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Donasi Analisis</h3>
        <select id="modeSelect" value={mode} onChange={handleModeChange}>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <Line
        data={mode === "monthly" ? monthlyData : yearlyData}
        options={options as any}
      />
    </div>
  );
};

export default DonasiAnalisisChart;
