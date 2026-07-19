"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", users: 25, sessions: 30 },
  { day: "Tue", users: 42, sessions: 58 },
  { day: "Wed", users: 55, sessions: 70 },
  { day: "Thu", users: 45, sessions: 62 },
  { day: "Fri", users: 65, sessions: 82 },
  { day: "Sat", users: 58, sessions: 72 },
  { day: "Sun", users: 72, sessions: 90 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="w-[106px] rounded border border-[#E5E5E5] bg-white p-2 ">
      <p className="text-[10px] text-[#737373]">{label}</p>

      <div className="my-1 h-px bg-[#E5E5E5]" />

      <div className="flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[2px] bg-[#22C55E]" />
          <span className="text-[#737373]">Users</span>
        </div>

        <span className="font-bold text-[#171717]">
          {payload[0].value}
        </span>
      </div>

      <div className="mt-1 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-[2px] bg-[#171717]" />
          <span className="text-[#737373]">Sessions</span>
        </div>

        <span className="font-bold text-[#171717]">
          {payload[1].value}
        </span>
      </div>
    </div>
  );
};

export default function UserActivityChart() {
  return (
    <section className="h-[437px] rounded-md border border-[#E5E5E5] bg-white p-6 ">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#171717]">
          User Activity
        </h2>

        <p className="mt-1 text-sm text-[#737373]">
          Weekly trends
        </p>
      </div>

      {/* Legend */}
      <div className="mb-5 flex justify-end gap-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#22C55E]" />
          <span className="text-xs text-[#737373]">
            Users
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#171717]" />
          <span className="text-xs text-[#737373]">
            Sessions
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
  data={data}
  margin={{
    top: 0,
    right: 8,
    left: 8,
    bottom: 20,
  }}
>

            <CartesianGrid
              stroke="#E5E5E5"
              strokeDasharray="4 4"
              vertical={false}
            />
<XAxis
  dataKey="day"
  interval={0}
  axisLine={{
    stroke: "#E5E5E5",
  }}
  tickLine={false}
  tick={{
    fontSize: 12,
    fill: "#737373",
  }}
  dy={14}
  padding={{
    left: 18,
    right: 18,
  }}
/>

           <YAxis
  domain={[0, 125]}
  ticks={[0, 25, 50, 75, 100, 125]}
  width={35}
  dx={-6}
  axisLine={false}
  tickLine={false}
  tickMargin={8}
  tick={{
    fontSize: 12,
    fill: "#737373",
  }}
/>

        <Tooltip
  content={<CustomTooltip />}
  cursor={false}
/>

<Line
  type="monotone"
  dataKey="users"
  stroke="#22C55E"
  strokeWidth={2}
  dot={false}
  activeDot={{
    r: 5,
    fill: "#22C55E",
  }}
/>

<Line
  type="monotone"
  dataKey="sessions"
  stroke="#171717"
  strokeWidth={2}
  dot={false}
  activeDot={{
    r: 5,
    fill: "#171717",
  }}
/>
</LineChart>
</ResponsiveContainer>
      </div>
    </section>
  );
}