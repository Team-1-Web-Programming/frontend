import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Diklaim', 'Ditambahkan'],
    datasets: [
      {
        label: 'Diklaim', 
        data: [80, 20],
        backgroundColor: ['#4CAF50', '#F0F4F8'], 
        borderWidth: 0,
        cutout: '75%', 
      },
      {
        label: 'Ditambahkan', 
        data: [60, 40],
        backgroundColor: ['#8BC34A', '#F0F4F8'], 
        borderWidth: 0,
        cutout: '85%', 
        radius: '80%', 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
    cutoutPercentage: 80,
  };

  return (
    <div style={{ width: '250px', height: '250px' }}>
      <Doughnut data={data} options={options as any} />
    </div>
  );
};

export default DoughnutChart;
