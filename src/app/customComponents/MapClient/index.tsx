"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useState } from "react";
import { Polyline } from "react-leaflet";
import { useEffect } from "react";

const MapClient: React.FC<{ lat: number; lng: number; city: string }> = ({
  lat,
  lng,
  city,
}) => {
  const [location, setLocation] = useState<[number, number]>([lat, lng]);

  const route: [number, number][] = [
    [lat, lng],
    [lat + 0.002, lng + 0.002],
    [lat + 0.004, lng + 0.001],
    [lat + 0.006, lng + 0.003],
    [lat + 0.008, lng + 0.002],
  ];

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % route.length;
      setLocation(route[idx]);
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);



  
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <MapContainer
        center={location}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[500px] w-full"
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapClient;
