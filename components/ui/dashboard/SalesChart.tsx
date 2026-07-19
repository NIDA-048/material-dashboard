"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", sales: 220, expenses: 250 },
  { month: "Feb", sales: 380, expenses: 470 },
  { month: "Mar", sales: 280, expenses: 370 },
  { month: "Apr", sales: 430, expenses: 530 },
  { month: "May", sales: 520, expenses: 620 },
  { month: "Jun", sales: 800, expenses: 900 },
  { month: "Jul", sales: 920, expenses: 1000 },
  { month: "Aug", sales: 840, expenses: 930 },
  { month: "Sep", sales: 760, expenses: 860 },
  { month: "Oct", sales: 910, expenses: 1000 },
  { month: "Nov", sales: 500, expenses: 600 },
  { month: "Dec", sales: 890, expenses: 980 },
];
function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value?: number; stroke?: string; name?: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-[4px] border border-[#E5E5E5] bg-white px-3 py-2 shadow-sm">
      <p className="mb-1 text-[10px] leading-3 text-[#737373]">{label}</p>

      <div className="space-y-1">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: item.stroke || "#000" }}
              />
              <span className="text-[10px] leading-3 text-[#737373]">
                {item.name}
              </span>
            </div>

            <span className="text-[10px] font-semibold leading-3 text-[#171717]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalesChart() {
  return (
    <section className="h-[437px] w-full rounded-[6px] border border-[#E5E5E5] bg-white p-6 ">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] font-semibold leading-7 text-[#171717]">
            Sales vs Expenses
          </h2>
          <p className="text-sm leading-5 text-[#737373]">
            Monthly revenue vs expenses
          </p>
        </div>

        <button className="flex h-[38px] w-[112px] items-center justify-center whitespace-nowrap rounded-[6px] border border-[#E5E5E5] bg-white px-4 text-sm font-medium leading-5 text-[#171717]">
          View Report
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-[30px] font-bold leading-9 text-[#171717]">
          $87,982.80
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[#22C55E]" />
            <span className="text-xs font-normal leading-4 text-[#737373]">
              Sales
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-[#1C1917]" />
            <span className="text-xs font-normal leading-4 text-[#737373]">
              Expenses
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[251px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 2, bottom: 0 }}>
            <defs>
              <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.5%" stopColor="#22C55E" stopOpacity={0.35} />
                <stop offset="99.5%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="expensesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.5%" stopColor="#1C1917" stopOpacity={0.22} />
                <stop offset="99.5%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E5E5E5"
              strokeDasharray="4 4"
              horizontal
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              interval={0}
              tick={{ fill: "#737373", fontSize: 12, fontWeight: 400 }}
              dy={10}
              padding={{ left: 8, right: 16 }}
            />

<YAxis
  width={48}
  tickLine={false}
  axisLine={false}
  domain={[0, 1000]}
  ticks={[0, 200, 400, 600, 800, 1000]}
  tickFormatter={(value) => (value === 0 ? "$0" : formatMoney(value))}
  tick={{ fill: "#737373", fontSize: 12 }}
/>

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="sales"
              name="Sales"
              stroke="#22C55E"
              strokeWidth={2}
              fill="url(#salesFill)"
              dot={false}
              activeDot={{ r: 4, fill: "#22C55E", stroke: "#22C55E" }}
            />

            <Area
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#1C1917"
              strokeWidth={2}
              fill="url(#expensesFill)"
              dot={false}
              activeDot={{ r: 4, fill: "#1C1917", stroke: "#1C1917" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}