import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Jan",
    total: 1500,
  },
  {
    name: "Feb",
    total: 2300,
  },
  {
    name: "Mar",
    total: 3500,
  },
  {
    name: "Apr",
    total: 2900,
  },
  {
    name: "May",
    total: 4700,
  },
  {
    name: "Jun",
    total: 5000,
  },
  {
    name: "Jul",
    total: 4300,
  },
  {
    name: "Aug",
    total: 5200,
  },
  {
    name: "Sep",
    total: 3000,
  },
  {
    name: "Oct",
    total: 250,
  },
  {
    name: "Nov",
    total: 5512,
  },
  {
    name: "Dec",
    total: 4044,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              total
            </span>
            <span className="font-bold">{payload[0].value}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const IncomeStats = () => {
  return (
    <div className="pt-4">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} defaultShowTooltip>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={18}
            tickLine={true}
            axisLine={true}
          />
          <YAxis
            stroke="#888888"
            fontSize={18}
            tickLine={true}
            axisLine={true}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="total" fill="rgb(22 163 74)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default IncomeStats;
