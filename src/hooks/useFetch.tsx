import { apiUrl } from "@/lib/fetchData";
import { Truck } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

// Simple in-memory cache for fetched data
const trucksCache: { data: Truck[] | null } = { data: null };

const useFetch: () => { fetchedTrucks: Truck[] | null; fetchError: string } = () => {
  const [fetchedTrucks, setFetchedTrucks] = useState<Truck[] | null>(null);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    // If trucks are already cached, use them
    if (trucksCache.data) {
      setFetchedTrucks(trucksCache.data);
      return;
    }
    const fetchTrucks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setFetchedTrucks(response.data);
        trucksCache.data = response.data; // Cache the result
      } catch (error) {
        setFetchError("Error fetching trucks from mock api");
      }
    };
    fetchTrucks();
  }, []);

  return { fetchedTrucks, fetchError };
};

export default useFetch;