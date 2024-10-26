import React from "react";

function DataTable({ data }) {
  const location = (item) => {
    // Store location data in localStorage
    localStorage.clear();
    localStorage.setItem("location", item.VehicleLocation);
    // Optional: Trigger a page update (e.g., via state or a custom event) if needed
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Data Table</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Make</th>
            <th className="px-4 py-2">Model</th>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Range</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => location(item)}
              className="cursor-pointer hover:bg-gray-200"
            >
              <td className="border px-4 py-2">{item.Make}</td>
              <td className="border px-4 py-2">{item.Model}</td>
              <td className="border px-4 py-2">{item.ModelYear}</td>
              <td className="border px-4 py-2">{item.ElectricRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
