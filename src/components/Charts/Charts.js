import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Charts({ data }) {
  const makeCounts = data.reduce((acc, item) => {
    acc[item.Make] = (acc[item.Make] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(makeCounts),
    datasets: [
      {
        label: "Vehicle Counts",
        data: Object.values(makeCounts),
        backgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-4">Charts</h2>
      <div className="mb-6">
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default Charts;
