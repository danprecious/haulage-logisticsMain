"use client";

import Link from "next/link";
import { FaSadTear } from "react-icons/fa";

const ErrorComponent: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[90vh] ">
      <FaSadTear className="text-red-600 text-6xl mb-4" />
      <h1 className="lg:text-4xl text-[1.8rem] font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="text-lg text-foreground/80">{message}</p>
      <p className="text-sm text-foreground/80 mt-2 flex items-center flex-col lg:flex-row">
        <Link className="underline mx-3" href="/">Go home</Link>{" "}
        or{" "}
        <Link className="underline mx-3" href="">
          Refresh
        </Link>
      </p>
    </div>
  );
};

export default ErrorComponent;
