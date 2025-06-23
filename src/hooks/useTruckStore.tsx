"use client";

import { useState } from "react";
import type { Truck } from "@/types";

let cachedTruck: Truck | null = null;

export function useTruckState() {
  const [selectedTruck, setSelectedTruck] = useState<Truck | null>(cachedTruck);

  const saveTruck = (truck: Truck) => {
    cachedTruck = truck;
    setSelectedTruck(truck);
  };

  if (selectedTruck) {
  }

  return { selectedTruck, saveTruck };
}
