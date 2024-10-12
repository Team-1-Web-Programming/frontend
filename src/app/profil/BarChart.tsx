import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalAktivitasChart = () => {
  const data = {
    labels: ["Total Aktivitas"],
    datasets: [
      {
        label: "Berbagi",
        data: [123], 
        backgroundColor: "#4CAF50", 
        borderRadius: 5, 
      },
      {
        label: "Klaim",
        data: [123],
        backgroundColor: "#B2F0B6", 
        borderRadius: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        font: {
          size: 20,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        display: false, 
        barPercentage: 0.5, 
        categoryPercentage: 0.1, 
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
        bottom: 50,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalAktivitasChart;
