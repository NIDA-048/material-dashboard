"use client";

import Image from "next/image";

type ProjectRowProps = {
  index: number;
  company: string;
  budget: string;
  team: string;
  progress: number;
  icon: "figma" | "github" | "discord" | "message";
  avatar: string;
};

export default function ProjectRow({
  company,
  budget,
  team,
  progress,
  icon,
  avatar,
}: ProjectRowProps) {
  return (
    <tr className="h-[77px] border-b border-[#E5E5E5] last:border-b-0">

      {/* Companies */}
      <td className="w-[340px] px-6">
        <div className="flex items-center gap-4">

          <input
            type="checkbox"
            className="h-[18px] w-[18px] appearance-none  rounded border border-[#D6D3D1] bg-white"
          />

          <Image
            src={`/icons/${icon}.png`}
            alt={icon}
            width={20}
            height={20}
          />

          <span className="text-sm font-medium text-[#1C1917]">
            {company}
          </span>

        </div>
      </td>


      {/* Members */}
      <td className="w-[150px] pl-2">
        <div className="-ml-3">
          <Image
            src={avatar}
            alt="member"
            width={145}
            height={34}
            className="rounded-full border-2 border-white object-cover"
          />
        </div>
      </td>


      {/* Budget */}
      <td className="w-[130px]">
        <span className="text-sm text-[#78716C]">
          {budget}
        </span>
      </td>


      {/* Team */}
      <td className="w-[140px]">
        <span className="inline-flex rounded-md border border-[#E5E5E5] bg-white px-2 py-1 text-xs font-medium text-[#171717]">
          {team}
        </span>
      </td>


      {/* Completion */}
      <td className="w-[260px] pr-6">
  <div className="flex items-center gap-1 ">
    <span className="w-8 text-xs font-medium text-[#78716C]">
      {progress}%
    </span>

    <div className="h-[9px] w-[145px] overflow-hidden rounded-full bg-[#F5F5F4]">
      <div
        className="h-full rounded-full bg-[#1C1917]"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
</td>

    </tr>
  );
}