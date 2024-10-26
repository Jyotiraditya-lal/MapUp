import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapPlaceholder() {
  const [position, setPosition] = useState([37.7749, -122.4194]);
  const dependencyVar = localStorage.getItem("location")

  function pointToLatLong(point) {
    const [longitude, latitude] = point
      .replace("POINT (", "")
      .replace(")", "")
      .split(" ");
    return [parseFloat(latitude), parseFloat(longitude)];
  }

  useEffect(() => {
    const point = localStorage.getItem("location");
    if (point) {
      setPosition(pointToLatLong(point));
    }
  }, [dependencyVar]); 

  return (
    <div className="p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-700 mb-12 text-center">
        Map Visualization
      </h2>
      <div className="h-80">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "90%", width: "90%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>A marker at this position.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapPlaceholder;
