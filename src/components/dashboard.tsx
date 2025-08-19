import KPICard from "./KPICard";
import DashboardOverviewCard from "./DashboardOverviewCard";
import ImageCard from "./imageCard";
import { useState } from "react";
import RechartBarChart from "./RechartBarChart";
import image1 from "../assets/images/House-Design-2-Storey-8.50m-x-10m-85-sqm-4-Bedrooms-front.jpg";
import image2 from "../assets/images/House-in-nSW-step-by-step-process-1024x693.jpg";
import image3 from "../assets/images/Simple-House-Design-25x39-Feet-House-Design-7.5x12-M-4-Beds-3-Bath-front-Cover.jpg";

const dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1 Month");
  const salesData = [
    { name: "Jan", totalInflow: 40, commission: 20 },
    { name: "Feb", totalInflow: 50, commission: 25 },
    { name: "Mar", totalInflow: 30, commission: 15 },
    { name: "Apr", totalInflow: 45, commission: 22 },
    { name: "May", totalInflow: 60, commission: 30 },
    { name: "Jun", totalInflow: 55, commission: 28 },
    { name: "Jul", totalInflow: 70, commission: 35 },
    { name: "Aug", totalInflow: 80, commission: 40 },
    { name: "Sep", totalInflow: 75, commission: 38 },
  ];

  return (
    <main className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Main Dashboard Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        {/* Welcome section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Ahmed</h1>
        </div>

        {/* Sales Overview Section */}
        <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg border border-[#2e2e2e] mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg font-semibold">Sales Overview</h2>
              <p className="text-sm text-gray-400">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 rounded-lg text-sm bg-[#2e2e2e] text-gray-300">
                View Transactions
              </button>
              <div className="flex space-x-1">
                {["1 Week", "1 Month", "1 Year"].map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      selectedTimeframe === timeframe
                        ? "bg-[#3a3a3a] text-white"
                        : "bg-[#2e2e2e] text-gray-400 hover:bg-[#3a3a3a]"
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recharts Bar Chart */}
          <RechartBarChart data={salesData} />
        </div>

        {/* Key Performance Indicators (KPIs) Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <KPICard
            title="Total Inflow"
            value="N120,000,000.00"
            change="2.5%"
            isPositive
          />
          <KPICard
            title="MRR"
            value="N50,000,000.00"
            change="2.5%"
            isPositive
          />
          <KPICard
            title="Commission Revenue"
            value="N200,000,000.00"
            change="0.5%"
            isPositive
          />
          <KPICard
            title="GHY"
            value="N100,000,000.00"
            change="0.1%"
            isPositive={false}
          />
        </div>

        {/* Listing and Users Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardOverviewCard
            title="Listings Overview"
            total="1.8k"
            stats={[
              { label: "Active", value: "80" },
              { label: "Archived", value: "1k" },
            ]}
          />
          <DashboardOverviewCard
            title="Users Overview"
            total="20.7k"
            stats={[
              { label: "Riders", value: "8.5k" },
              { label: "Subscribers", value: "7.5k" },
            ]}
          />
        </div>
      </div>

      {/* Right Sidebar Section */}
      <div className="col-span-1">
        <div className="flex flex-col space-y-4">
          {/* Image Cards */}
          <ImageCard
            label="MOST CLICKED"
            title="Urban Prime Plaza Premiere"
            imageUrl={image1}
          />
          <ImageCard
            label="MOST WATCHLISTED"
            title="Urban Prime Plaza Premiere"
            imageUrl={image2}
          />
          <ImageCard
            label="HOTTEST LISTING"
            title="Urban Prime Plaza Premiere"
            imageUrl={image3}
          />
        </div>
      </div>
    </main>
  );
};

export default dashboard;
