"use client";

import { useTruckState } from "@/hooks/useTruckStore";
import { Truck } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { apiUrl } from "@/lib/fetchData";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";

const MapClient = dynamic(() => import("@/app/customComponents/MapClient"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

const UniqueTruck = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedTruck } = useTruckState();
  // const [truck, setTruck] = useState<Truck | null>(null);
  const [loading, setLoading] = useState(true);

  const { fetchError, fetchedTrucks } = useFetch();

  const truck = fetchedTrucks?.filter((truck) => truck.id === id)[0];

  if (!selectedTruck && !truck) {
    return (
      <div className="flex items-center flex-col justify-center text-center h-[90vh]">
        <h1 className="text-lg font-bold text-foreground/50">
          Unable to load truck data. Retrying...
        </h1>
        <p className="mt-8">No changes?</p>
        <Link
          href="/dashboard"
          className="underline hover:text-foreground/80 text-foreground/50"
        >
          Go to dashboard
        </Link>
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

      <div className="bg-foreground/5 shadow-md  p-6 mb-4 ">
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
