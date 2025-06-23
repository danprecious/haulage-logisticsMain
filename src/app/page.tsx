import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center ">
      <h1 className="text-[2rem] lg:text-[4rem] font-black mb-10 mt-32">
        Check Your Truck Data
      </h1>

      <div className="">
        <Link href="/dashboard" className="button">
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
};

export default Home;
