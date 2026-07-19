"use client";
import { Bell, ShoppingCart } from "lucide-react";
const cards = [
  {
    title: "Website View",
    description: "Last Campaign Performance",
    status: "Campaign sent 2 days ago",
  },
  {
    title: "Daily Sales",
    description: "15% increase in today sales",
    status: "Updated 4 min ago",
  },
];

const bars = [42, 58, 36, 68, 10, 18, 52];

export default function AnalyticsCard() {
  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="h-[257px] w-full rounded-[8px] border border-[#E7E5E4] bg-white p-6"
        >
          {/* Heading */}
          <div className="space-y-1">
            <h3 className="text-[14px] font-semibold leading-5 text-[#1C1917]">
              {card.title}
            </h3>

            <p className="text-[12px] leading-4 text-[#78716C]">
              {card.description}
            </p>
          </div>

          {/* Chart */}
          <div className="mt-3">
            <div className="relative h-[128px] rounded-md">
              {/* horizontal grid */}
              <div className="absolute left-0 right-0 top-4 border-t border-dashed border-[#E7E5E5]" />
              <div className="absolute left-0 right-0 top-10 border-t border-dashed border-[#E7E5E5]" />
              <div className="absolute left-0 right-0 top-16 border-t border-dashed border-[#E7E5E5]" />
              <div className="absolute left-0 right-0 top-20 border-t border-dashed border-[#E7E5E5]" />
              <div className="absolute bottom-6 left-0 right-0 border-t border-[#E5E5E5]" />

             {/* Tooltip */}
{index === 0 && (
  <div className="absolute left-2 top-2 z-50 rounded-[4px] border border-[#E5E5E5] bg-white px-2 py-2 shadow-sm">
    <p className="text-[10px] text-[#737373]">Tuesday</p>

    <div className="my-1 h-px bg-[#E5E5E5]" />

    <div className="flex items-center gap-1">
      <span className="h-[6px] w-[6px] rounded-full bg-[#1C1917]" />

      <span className="text-[10px] text-[#737373]">
        Views:
      </span>

      <span className="text-[10px] font-semibold text-[#1C1917]">
        21
      </span>
    </div>
  </div>
)}

              {/* Bars */}
              <div className="absolute bottom-10 flex w-full items-end justify-between px-1">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className={`w-[18px] rounded-t-[2px] ${
                      i === 3 ? "bg-[#3B82F6]" : "bg-[#1C1917]"
                    }`}
                    style={{ height }}
                  />
                ))}
              </div>

              {/* Days */}
              <div className="absolute bottom-0 flex w-full justify-between px-1 text-[12px] text-[#737373]">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#22C55E]" />

            <p className="text-[12px] leading-4 text-[#78716C]">
              {card.status}
            </p>
          </div>
        </div>
      ))}
{/* Card 3 */}
<div className="flex h-[257px] w-full flex-col rounded-[8px] border border-[#E7E5E4] bg-white p-6">
  <div className="space-y-1">
    <h3 className="text-[14px] font-semibold leading-5 text-[#1C1917]">
      Completed Tasks
    </h3>

    <p className="text-[12px] leading-4 text-[#78716C]">
      Last Campaign Performance
    </p>
  </div>

  <div className="relative mt-5 h-[135px]">
    <div className="absolute left-0 right-0 top-4 border-t border-dashed border-[#E5E5E5]" />
    <div className="absolute left-0 right-0 top-10 border-t border-dashed border-[#E5E5E5]" />
    <div className="absolute left-0 right-0 top-16 border-t border-dashed border-[#E5E5E5]" />
    <div className="absolute left-0 right-0 top-20 border-t border-dashed border-[#E5E5E5]" />
    <div className="absolute bottom-6 left-0 right-0 border-t border-[#E5E5E5]" />

    <div className="absolute bottom-8 flex w-full items-end justify-between px-1">
      {bars.map((height, i) => (
        <div
          key={i}
          className={`w-[18px] rounded-t-[2px] ${
            i === 3 ? "bg-[#3B82F6]" : "bg-[#1C1917]"
          }`}
          style={{ height }}
        />
      ))}
    </div>

    <div className="absolute bottom-0 flex w-full justify-between px-1 text-[12px] text-[#737373]">
      <span>M</span>
      <span>T</span>
      <span>W</span>
      <span>T</span>
      <span>F</span>
      <span>S</span>
      <span>S</span>
    </div>
  </div>

  <div className="mt-4 flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
    <p className="text-[12px] text-[#78716C]">
      Just updated
    </p>
  </div>
</div>

{/* Card 4 */}
{/* Card 4 */}
<div className="h-[257px] w-full rounded-[8px] border border-[#E7E5E4] bg-white p-6">
  {/* Heading */}
  <div className="space-y-1">
    <h3 className="text-[14px] font-semibold leading-5 text-[#1C1917]">
      Orders Overview
    </h3>

    <p className="text-[12px] leading-4 text-[#78716C]">
      Last Campaign Performance
    </p>
  </div>

  {/* Timeline */}
<div className="mt-6 flex h-[135px] flex-col justify-between">

  <div className="space-y-5">

    {/* Item 1 */}
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 items-center justify-center">
        <Bell
          size={16}
          strokeWidth={2}
          className="text-[#22C55E]"
        />
      </div>

      <div>
        <p className="text-[14px] leading-5 text-[#1C1917]">
          $2,400, Design Changes
        </p>

        <p className="mt-1 text-[12px] leading-4 text-[#78716C]">
          22 DEC 7:20 PM
        </p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 items-center justify-center">
        <ShoppingCart
          size={16}
          strokeWidth={2}
          className="text-[#EF4444]"
        />
      </div>

      <div>
        <p className="text-[14px] leading-5 text-[#1C1917]">
          New Order #1832412
        </p>

        <p className="mt-1 text-[12px] leading-4 text-[#78716C]">
          22 DEC 7:20 PM
        </p>
      </div>
    </div>

  </div>

  {/* Badge */}
  <span className="mt-2 inline-flex w-fit items-center rounded-full bg-[#F0FDF4] px-3 py-1 text-[12px] font-medium text-[#22C55E]">
    +24% this month
  </span>

</div>

  </div>
    </section>
  );
}