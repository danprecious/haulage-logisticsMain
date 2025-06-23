"use client";

import { mockResponse } from "@/lib/mockData";
import { Truck } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [fetchedTrucks, setFetchedTrucks] = useState<Truck[] | null>(null);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const response = await axios.get(
          "https://haulage-logistics.free.beeceptor.com/trucks"
        );
        setFetchedTrucks(response.data);
      } catch (error) {
        // setFetchedTrucks(mockResponse);
        setFetchError("Error fetching trucks from mock api");
      }
    };

    fetchTrucks();
  });

  return { fetchedTrucks, fetchError };
};

export default useFetch;
