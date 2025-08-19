import { ChevronRight } from "lucide-react";

const DashboardOverviewCard = ({
  title,
  total,
  stats,
}: {
  title: string;
  total: string;
  stats: { label: string; value: string }[];
}) => (
  <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <a href="#" className="text-sm text-blue-600 flex items-center">
        View all
        <ChevronRight size={16} />
      </a>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mb-4">
      <div>
        <h4 className="text-lg text-gray-400">Total</h4>
        <p className="text-3xl font-bold">{total}</p>
      </div>
      <div className="sm:h-12 w-[1px] bg-gray-600 mx-4 hidden sm:block"></div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 mt-4 sm:mt-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 min-w-[80px]">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-lg font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DashboardOverviewCard;
