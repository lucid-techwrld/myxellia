const KPICard = ({
  title,
  value,
  change,
  isPositive,
}: {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}) => (
  <div className="bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-800">
    <h3 className="text-sm text-gray-400">{title}</h3>
    <div className="mt-1 font-bold text-lg">{value}</div>
    <div
      className={`flex items-center text-sm ${
        isPositive ? "text-green-500" : "text-red-500"
      }`}
    >
      <span className="mr-1">{isPositive ? "↑" : "↓"}</span>
      <span>{change}</span>
    </div>
  </div>
);

export default KPICard;
