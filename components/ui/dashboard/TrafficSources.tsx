"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Desktop", value: 35 },
  { name: "Tablet", value: 40 },
  { name: "Mobile", value: 25 },
];

const COLORS = [
  "#22C55E",
  "#2563EB",
  "#171717",
];

export default function TrafficSourcesChart() {
  return (
    <section className="h-[437px] rounded-md border border-[#E5E5E5] bg-white p-6">

      {/* Header */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#171717]">
          Traffic Sources
        </h2>

        <p className="mt-1 text-sm text-[#737373]">
          Device breakdown
        </p>
      </div>

      {/* Legend */}
      <div className="mt-8 mb-4 flex justify-end gap-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#22C55E]" />
          <span className="text-xs text-[#737373]">Desktop</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#2563EB]" />
          <span className="text-xs text-[#737373]">Tablet</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-[2px] bg-[#171717]" />
          <span className="text-xs text-[#737373]">Mobile</span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex h-[280px] items-center justify-center">
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              startAngle={90}
              endAngle={450}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              cornerRadius={3}
              stroke="#FFFFFF"
              strokeWidth={4}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </section>
  );
}