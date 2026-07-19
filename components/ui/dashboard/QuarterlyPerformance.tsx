"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { quarter: "Q1", revenue: 120000, profit: 48000 },
  { quarter: "Q2", revenue: 200000, profit: 130000 },
  { quarter: "Q3", revenue: 170000, profit: 90000 },
  { quarter: "Q4", revenue: 230000, profit: 125000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="w-[120px] rounded border border-[#E5E5E5] bg-white p-2 ">
      <p className="text-[10px] text-[#737373]">{label}</p>

      <div className="my-1 h-px bg-[#E5E5E5]" />

    <div className="flex items-center justify-between text-[10px]">
  <div className="flex w-[58px] items-center gap-1">
    <span className="h-2 w-2 rounded-[2px] bg-[#22C55E]" />
    <span className="text-[#737373]">Revenue</span>
  </div>

  <span className="font-bold text-[#171717]">
    {payload[0].value}
  </span>
</div>

<div className="mt-1 flex items-center justify-between text-[10px]">
  <div className="flex w-[58px] items-center gap-1">
    <span className="h-2 w-2 rounded-[2px] bg-[#171717]" />
    <span className="text-[#737373]">Profit</span>
  </div>

  <span className="font-bold text-[#171717]">
    {payload[1].value}
  </span>
</div>
    </div>
  );
};

export default function QuarterlyPerformanceChart() {
  return (
    <section className="h-[437px] rounded-md border border-[#E5E5E5] bg-white p-6">
      {/* Header */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#171717]">
          Quarterly Performance
        </h2>

        <p className="mt-1 text-sm text-[#737373]">
          Revenue and profit analysis
        </p>
      </div>

      {/* Legend */}
      <div className="mt-8 mb-4 flex justify-end gap-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#22C55E]" />
          <span className="text-xs text-[#737373]">Revenue</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#171717]" />
          <span className="text-xs text-[#737373]">Profit</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}

            margin={{
              top: 10,
              right: 0,
              left: 20,
              bottom: 10,
            }}
            barGap={6}
            barCategoryGap="30%"
          >
            <CartesianGrid
              stroke="#E5E5E5"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="quarter"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#737373",
              }}
            />

            <YAxis
              domain={[0, 300000]}
              ticks={[0, 60000, 120000, 180000, 240000, 300000]}
              width={45}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              tick={{
                fontSize: 12,
                fill: "#737373",
              }}
            />

            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
            />

            <Bar
              dataKey="revenue"
              fill="#22C55E"
              radius={[2, 2, 0, 0]}
              barSize={28}
            />

            <Bar
              dataKey="profit"
              fill="#171717"
              radius={[2, 2, 0, 0]}
               barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}