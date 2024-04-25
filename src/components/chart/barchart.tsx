"use client";
import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Feb",
    Income: 4000,
    Expenses: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    Income: 3000,
    Expenses: 1398,
    amt: 2210,
  },
  {
    name: "Apr",
    Income: 2000,
    Expenses: 9800,
    amt: 2290,
  },
  {
    name: "May",
    Income: 2780,
    Expenses: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    Income: 1890,
    Expenses: 4800,
    amt: 2181,
  },
  {
    name: "July",
    Income: 2390,
    Expenses: 3800,
    amt: 2500,
  },
];

export const BarChartCom = () => {
  // let demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <BarChart width={250} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Expenses" fill="#7DB4FE" />
          <Bar dataKey="Income" fill="#F6A3C8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
