"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    2020: 4000,
    2021: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    2020: 3000,
    2021: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    2020: 2000,
    2021: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    2020: 2780,
    2021: 3908,
    amt: 2000,
  },
  {
    name: "May",
    2020: 1890,
    2021: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    2020: 2390,
    2021: 3800,
    amt: 2500,
  },
  {
    name: "July",
    2020: 3490,
    2021: 4300,
    amt: 2100,
  },
];

export const StackedAreaChartCom = () => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7DB4FE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7DB4FE" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F6A3C8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F6A3C8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="2020"
            stroke="#7DB4FE"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="2021"
            stroke="#F6A3C8"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
