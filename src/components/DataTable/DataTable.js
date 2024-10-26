import React, { useState } from "react";

function DataTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const location = (item) => {
    localStorage.clear();
    localStorage.setItem("location", item.VehicleLocation);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
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
            <th className="px-4 py-2">CAFVEligibility</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              onClick={() => location(item)}
              className="cursor-pointer hover:bg-gray-200"
            >
              <td className="border px-4 py-2">{item.Make}</td>
              <td className="border px-4 py-2">{item.Model}</td>
              <td className="border px-4 py-2">{item.ModelYear}</td>
              <td className="border px-4 py-2">{item.ElectricRange}</td>
              <td className="border px-4 py-2 text-center">{item.CAFVEligibility}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTable;
