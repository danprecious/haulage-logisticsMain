"use client";

import { useTruckState } from "@/hooks/useTruckStore";
import { Truck } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTruck } from "react-icons/fa";

const TruckCard: React.FC<{ truck: Truck }> = ({ truck }) => {
  const { id, driver, location, status } = truck;
  const router = useRouter();

  const { saveTruck } = useTruckState();

  const handleViewDetails = () => {
    saveTruck(truck);
    router.push(`/trucks/${truck.id}`);
  };

  return (
    <div key={id} className="relative">
      {status === "In Transit" ? (
        <div className="h-[10px] w-[10px] rounded-full bg-green-500 animate-pulse absolute top-3 right-3"></div>
      ) : status === "Maintenance" ? (
        <div className="h-[10px] w-[10px] rounded-full bg-yellow-200 absolute top-3 right-3 animate-pulse"></div>
      ) : (
        <div className="h-[10px] w-[10px] rounded-full bg-red-500 absolute top-3 right-3 animate-pulse"></div>
      )}
      <div
        // key={index}
        className="bg-foreground/5 shadow-md rounded-lg p-4 mb-4 flex flex-col gap-2"
      >
        <h3 className="text-[1.2em] flex items-center font-black">
          <FaTruck className="mr-5 text-foreground/80" />
          {id}
        </h3>
        <div className="text-sm text-foreground/80">
          <p className="">Driver: {driver}</p>
          <p className="">Status: {status}</p>
          <p className="">
            Location: {location.city} ({location.lat}, {location.lng})
          </p>
        </div>
        <div className="">
          <button
            onClick={handleViewDetails}
            className="underline text-sm text-foreground/80 cursor-pointer hover:text-foreground/100"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
