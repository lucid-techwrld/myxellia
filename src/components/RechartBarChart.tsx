import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SalesData {
  name: string;
  totalInflow: number;
  commission: number;
}

interface RechartBarChartProps {
  data: SalesData[];
}

const RechartBarChart: React.FC<RechartBarChartProps> = ({ data }) => {
  return (
    <div className="h-64 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#4a4a4a" />
          <YAxis stroke="#4a4a4a" />
          <Tooltip
            cursor={{ fill: "#333" }}
            contentStyle={{
              backgroundColor: "#1e1e1e",
              border: "1px solid #4a4a4a",
            }}
            labelStyle={{ color: "white" }}
          />
          <Bar
            dataKey="totalInflow"
            stackId="a"
            fill="#2E8BC9"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="commission"
            stackId="a"
            fill="#1C5B8A"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RechartBarChart;
