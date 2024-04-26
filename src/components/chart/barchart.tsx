"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
];

export const BarChartCom = () => {
  return (
    <div style={{ width: "100%", height: 215 }}>
      <ResponsiveContainer>
        <BarChart width={250} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Expenses" fill="#9c50a5" />
          <Bar dataKey="Income" fill="#755cca" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
