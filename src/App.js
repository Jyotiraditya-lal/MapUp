import React from "react";
import SummaryStats from "./components/SummaryStats/SummaryStats.js";
import Charts from "./components/Charts/Charts.js";
import DataTable from "./components/DataTable/DataTable.js";
import MapPlaceholder from "./components/MapPlaceholder/MapPlaceholder.js";

function App() {
  const makesAndModels = [
    { make: "TESLA", model: "MODEL Y" },
    { make: "HONDA", model: "ACCORD" },
    { make: "FORD", model: "C-MAX" },
    { make: "NISSAN", model: "Leaf" },
    { make: "CHEVROLET", model: "BOLT EV" },
    { make: "AUDI", model: "e-tron" }
  ];
  
  const data = Array.from({ length: 50 }, (_, index) => {
    const { make, model } = makesAndModels[index % makesAndModels.length]; 
    
    return {
      VIN: `5YJYGDEE${(index + 1).toString().padStart(2, "0")}L`,
      County: "King",
      City: "Seattle",
      State: "WA",
      PostalCode: "98122",
      ModelYear: 2020 + (index % 3), 
      Make: make,
      Model: model,
      ElectricVehicleType: model === "ACCORD" ? "Hybrid Electric Vehicle (HEV)" : "Battery Electric Vehicle (BEV)", 
      CAFVEligibility: model === "ACCORD" ? "Not Eligible" : "Clean Alternative Fuel Vehicle Eligible",
      ElectricRange: 250 + (index % 100), 
      BaseMSRP: model === "ACCORD" ? 24000 : 0, 
      LegislativeDistrict: 37,
      DOLVehicleID: (123456789 + index).toString(),
      VehicleLocation: `POINT (-122.30839 ${47.610365 + index * 0.01})`,
      ElectricUtility: "CITY OF SEATTLE - (WA)|CITY OF TACOMA - (WA)",
      CensusTract: "53033007800"
    };
  });
  
  console.log(data);
  

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Electric Vehicle Dashboard
        </h1>
        <p className="text-gray-600">
          Overview of Electric Vehicle Metrics and Insights
        </p>
      </header>

      <SummaryStats data={data} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Charts data={data} />
        <MapPlaceholder />
      </div>
      <DataTable data={data} />
    </div>
  );
}

export default App;
