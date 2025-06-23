
import Analytics from "../customComponents/analytics";
import TruckCards from "../customComponents/truckCards";
import { FaUserCircle } from "react-icons/fa";
import TrendChart from "../customComponents/trendChart";

const Dashboard = async () => {

console.log("rendered");

  return (
    <section className="">
      <div className="flex items-center">
        <FaUserCircle className="lg:text-[3rem] text-[2.5rem] mr-5 text-foreground/50" />
        <div className="">
          <h1 className="text-lg font-bold">Brendan James</h1>
          <p className="text-foreground/50 text-sm">Admin</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center py-10">
        <div className="lg:w-[60%] mb-10 lg:mb-0">
          <TrendChart />
        </div>
        <div className="lg:w-[35%] mb-10 lg:mb-0">
          <Analytics />
        </div>
      </div>

      <TruckCards />
    </section>
  );
};

export default Dashboard;
