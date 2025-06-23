"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type TrendDataPoint = {
  date: string;
  inTransit: number;
  idle: number;
  maintenance: number;
};

// mock history data
const trendData: TrendDataPoint[] = [
  { date: "06-16", inTransit: 5, idle: 3, maintenance: 1 },
  { date: "06-17", inTransit: 6, idle: 2, maintenance: 2 },
  { date: "06-18", inTransit: 4, idle: 4, maintenance: 1 },
  { date: "06-19", inTransit: 7, idle: 1, maintenance: 0 },
  { date: "06-20", inTransit: 6, idle: 2, maintenance: 1 },
  { date: "06-21", inTransit: 5, idle: 3, maintenance: 2 },
  { date: "06-22", inTransit: 8, idle: 0, maintenance: 1 },
];

const TrendChart = () => {
  return (
    <div className="w-full h-[300px] overflow-hidden lg:h-[25em] flex flex-col items-start">
      <h3 className="text-lg font-semibold mb-5 lg:ml-12">
        Truck Status Trend (Past 7 Days)
      </h3>
      <div className="w-full ml-[-1em] h-full">

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="inTransit"
            stroke="green"
            name="In Transit"
          />
          <Line type="monotone" dataKey="idle" stroke="#ee1616" name="Idle" />
          <Line
            type="monotone"
            dataKey="maintenance"
            stroke="blue"
            name="Maintenace"
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendChart;
