"use client";

import useFetch from "@/hooks/useFetch";
import {
  FaClock,
  FaSpinner,
  FaTruck,
  FaTruckMoving,
  FaTruckPickup,
} from "react-icons/fa";

const Analytics = () => {
  const { fetchedTrucks, fetchError } = useFetch();

  // Mock average idle time calculation using random values
  const getAverageIdleTime = () => {
    if (!fetchedTrucks) return null;
    const idleTrucks = fetchedTrucks.filter((truck) => truck.status === "Idle");
    if (idleTrucks.length === 0) return 0;
    // Assigning a random idle time (0-119 mins) for each idle truck
    const totalIdleTime = idleTrucks.reduce((sum) => {
      const idleTime = Math.floor(Math.random() * 120); // 0-119 mins
      return sum + idleTime;
    }, 0);
    return Math.round(totalIdleTime / idleTrucks.length);
  };

  const analyticsData = [
    {
      id: 1,
      icon: <FaTruckMoving />,
      data: fetchedTrucks?.filter((truck) => truck.status === "In Transit")
        .length,
      label: "In Transit",
    },
    {
      id: 2,
      icon: <FaTruck />,
      data: fetchedTrucks?.length,
      label: "Total Trucks",
    },
    {
      id: 3,
      icon: <FaTruckPickup />,
      data: fetchedTrucks?.filter((truck) => truck.status === "Idle").length,
      label: "Idle Trucks",
    },
    {
      id: 4,
      icon: <FaClock />,
      data: getAverageIdleTime(),
      label: "Average Idle Time (min)",
    },
  ];

  return (
    <div className="">
      <div className="grid-cols-2 grid lg:grid-cols-2 gap-4">
        {analyticsData.map(({ id, data, icon, label }) => {
          return (
            <div
              key={id}
              className="flex items-center text-center justify-center b-around flex-col p-5 rounded-md lg:p-6 relative"
            >
              <div className="lg:p-3 p-1 lg:text-[1.2rem] text-[1rem] rounded-full b-around text-foreground/80 absolute top-3 left-3">
                {icon}
              </div>
              {!fetchedTrucks && (
                <div className="text-[1.8rem] py-5">
                  <FaSpinner className="animate-spin" />
                </div>
              )}
              {fetchedTrucks && typeof data === "number" && data === 0 && (
                <div className="text-[1.1rem] py-5 text-foreground/40">
                  No data received
                </div>
              )}
              {data && (
                <h3 className="text-[2rem] font-black mt-5 py-5">
                  {data}
                </h3>
              )}
              <p className="text-foreground/80 font-semibold">{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;
