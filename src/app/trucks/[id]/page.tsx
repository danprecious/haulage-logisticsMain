"use client";

import { useTruckState } from "@/hooks/useTruckStore";
import { Truck } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/app/customComponents/MapClient"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

const UniqueTruck = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedTruck } = useTruckState();
  const [truck, setTruck] = useState<Truck | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedTruck) {
      axios
        .get("https://haulage-logistics.free.beeceptor.com/trucks")
        .then((response) => {
          const data: Truck[] = response.data;
          const singleTruck = data.find((t) => t.id === id);
          setTruck(singleTruck || null);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching truck data:", error);

          setLoading(false);
          throw new Error("Error fetching truck data");
        });
    }
  }, [id, selectedTruck]);

  if (!selectedTruck && !truck) {
    return (
      <div className="flex items-center justify-center text-center h-[90vh]">
        <h1 className="text-lg font-bold text-foreground/50">
          Unable to load truck data. Please try again later.
        </h1>
      </div>
    );
  }

  const latPosition = selectedTruck
    ? selectedTruck.location.lat
    : truck
    ? truck.location.lat
    : 0;

  const lngPosition = selectedTruck
    ? selectedTruck.location.lng
    : truck
    ? truck.location.lng
    : 0;

  const city = selectedTruck
    ? selectedTruck.location.city
    : truck
    ? truck.location.city
    : "";

  return (
    <div>
      <MapClient lat={latPosition} lng={lngPosition} city={city} />

      <div className="bg-foreground/5 shadow-md rounded-lg p-4 mb-4 mt-10">
        <h2 className="text-[1.2em] font-semibold">
          Truck ID: {selectedTruck?.id || truck?.id}
        </h2>
        <div className="text-sm text-foreground/80">
          <p>Driver: {selectedTruck?.driver || truck?.driver}</p>
          <p>Status: {selectedTruck?.status || truck?.status}</p>
          <p>
            Location:{" "}
            {selectedTruck
              ? `${selectedTruck.location.city} (${selectedTruck.location.lat}, ${selectedTruck.location.lng})`
              : `${truck?.location.city} (${truck?.location.lat}, ${truck?.location.lng})`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniqueTruck;
