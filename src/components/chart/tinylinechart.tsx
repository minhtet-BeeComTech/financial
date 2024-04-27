"use client";
import { AreaChart, Tooltip, Area, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    da: 0,
    pv: 200,
    amt: 300,
  },
  {
    name: "Page B",
    da: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    da: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    da: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    da: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    da: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    da: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const TinyLineChartCom = () => {
  return (
    <div style={{ width: "100%", height: 100 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area type="monotone" dataKey="da" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
