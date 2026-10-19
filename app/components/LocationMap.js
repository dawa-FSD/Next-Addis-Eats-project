"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ position, onSelect }) {
  useMapEvents({
    click(event) {
      onSelect([event.latlng.lat, event.latlng.lng]);
    },
  });

  return <Marker position={position} icon={markerIcon} />;
}

export default function LocationMap({ onLocationSelect }) {
  const [position, setPosition] = useState([9.03, 38.74]);

  function handleSelect(newPosition) {
    setPosition(newPosition);

    onLocationSelect({
      latitude: newPosition[0],
      longitude: newPosition[1],
    });
  }

  return (
    <div className="delivery-map-section">
      <h3>Choose delivery location</h3>
      <p>Click the map to select your delivery location.</p>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          height: "350px",
          width: "100%",
          borderRadius: "12px",
          zIndex: 0,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker position={position} onSelect={handleSelect} />
      </MapContainer>

      <div className="selected-coordinates">
        <p>
          <strong>Latitude:</strong> {position[0].toFixed(6)}
        </p>

        <p>
          <strong>Longitude:</strong> {position[1].toFixed(6)}
        </p>
      </div>
    </div>
  );
}
