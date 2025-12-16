import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1
        className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
      >
        {" "}
        Dashboard
      </h1>

      {/*dashboard page*/}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
