import React from "react";

function SummaryStats({ data }) {
  const totalVehicles = data.length;
  const uniqueMakes = [...new Set(data.map((item) => item.Make))].length;
  const avgRange =
    data.reduce((sum, item) => sum + parseInt(item.ElectricRange || 0), 0) /
    (data.length || 1);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-4 bg-white shadow rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Vehicles</h2>
        <p className="text-3xl font-bold text-blue-500">{totalVehicles}</p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">Unique Makes</h2>
        <p className="text-3xl font-bold text-blue-500">{uniqueMakes}</p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">Average Range</h2>
        <p className="text-3xl font-bold text-blue-500">{Math.round(avgRange)}</p>
      </div>
    </section>
  );
}

export default SummaryStats;
