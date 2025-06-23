"use client";

import { TruckList } from "@/types";
import axios from "axios";
import TruckCard from "./truckCard";
import { useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TruckCards = () => {
  const [trucks, setTrucks] = useState<TruckList | null>(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const responses = await axios.get(
          "https://haulage-logistics.free.beeceptor.com/trucks"
        );
        setTrucks(responses.data);
      } catch (error) {
        console.error("Error fetching truck data:", error);

        throw new Error("Unable to load truck data");
      }
    };
    fetchTrucks();
  }, []);

  const filteredTrucks =
    filter === "all" || !filter
      ? trucks
      : trucks?.filter((item) => item?.status === filter);

  if (!trucks) {
    return (
      <div className="flex items-center justify-center text-center h-[70vh]">
        <h1 className="text-lg font-bold text-foreground/50">
          Unable to load truck data. Please try again later.
        </h1>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="">Trucks</h2>
      <div className="flex">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="md:w-[250px] w-full mt-5 outline-foreground/10 outline-[1px] border-[1px] border-foreground/10">
            <IoFilterOutline className="mr-2 text-foreground/50" />
            <SelectValue
              placeholder="Select status"
              className="outline-[1px]"
            />
          </SelectTrigger>
          <SelectContent className="bg-background text-foreground/90 border-foreground/10 outline-foreground/10 outline-[1px] border-[1px]">
            <SelectItem value="all">All Trucks</SelectItem>
            <SelectItem value="In Transit">In Transit</SelectItem>
            <SelectItem value="Idle">Idle Trucks</SelectItem>
            <SelectItem value="Maintenance">Under Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-3 py-10">
        {filteredTrucks?.map((truck, index) => {
          return <TruckCard key={truck.id} truck={truck} />;
        })}
      </div>
    </div>
  );
};

export default TruckCards;
//  let responses;

//   try {
//     responses = await axios.get(
//       "https://mp8405818e082e994cb3.free.beeceptor.com/trucks"
//     );
//   } catch (error) {
//     console.error("Error fetching truck data:", error);
//   }
