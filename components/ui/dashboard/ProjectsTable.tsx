"use client";

import { SlidersVertical } from "lucide-react";
import ProjectRow from "./ProjectRow";

const projects = [
  {
    company: "Material Figma Version",
    budget: "$14,000",
    team: "Design",
    progress: 50,
    icon: "figma",
    avatar: "/avatars/avatar-1.png",
  },
  {
    company: "Add Progress Track",
    budget: "$3,000",
    team: "Development",
    progress: 10,
    icon: "github",
    avatar: "/avatars/avatar-2.png",
  },
  {
    company: "Fix Platform Errors",
    budget: "$20,000",
    team: "Back-End",
    progress: 50,
    icon: "discord",
    avatar: "/avatars/avatar-3.png",
  },
  {
    company: "Launch Mobile App",
    budget: "$5,000",
    team: "Design",
    progress: 50,
    icon: "github",
    avatar: "/avatars/avatar-2.png", // Avatar 2
  },
  {
    company: "New Pricing Page",
    budget: "$2,000",
    team: "Marketing",
    progress: 50,
    icon: "message",
    avatar: "/avatars/avatar-1.png", // Avatar 1
  },
] as const;


export default function ProjectsTable() {
  return (
    <section className="mt-8 rounded-lg border border-[#E5E5E5] bg-white">
      <div className="flex items-center justify-between px-6 py-6">
        <div>
          <h2 className="text-[18px] font-semibold text-[#1C1917]">
            Projects
          </h2>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <p className="text-sm text-[#78716C]">
              30 done this month
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-[34px] items-center gap-2 rounded-md border border-[#E5E5E5] bg-white px-3 text-sm font-medium">
            Filter
            <SlidersVertical size={16} />
          </button>

          <button className="flex h-[34px] items-center rounded-lg border border-[#1C1917] bg-[#1C1917] px-4 text-sm font-medium text-white">
            New Project
          </button>
        </div>
      </div>

      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-[#E5E5E5] text-left">

            <th className="w-[300px] px-6 py-3 text-xs font-normal uppercase text-[#78716C]">
              Companies
            </th>

            <th className="w-[150px] pl-4 py-3 text-xs font-normal uppercase text-[#78716C]">
              Members
            </th>

            <th className="w-[130px] py-3 text-xs font-normal uppercase text-[#78716C]">
              Budget
            </th>

            <th className="w-[140px] py-3 text-xs font-normal uppercase text-[#78716C]">
              Team
            </th>

            <th className="w-[260px] pr-6 py-3 text-xs  font-normal uppercase text-[#78716C]">
              Completion
            </th>

          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <ProjectRow
              key={index}
              index={index}
              company={project.company}
              budget={project.budget}
              team={project.team}
              progress={project.progress}
              icon={project.icon}
              avatar={project.avatar}
            />
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between  px-6 py-4">

        <p className="text-sm">
          <span className="font-normal text-[#171717]">
            Page 2
          </span>
          <span className="text-[#A8A29E]">
            {" "}of 10
          </span>
        </p>

        <div className="flex gap-4">
         <button className="flex h-[38px] w-[80px] items-center justify-center gap-2 rounded-md border border-[#D6D3D1] text-sm font-medium text-[#171717]">
  <span>&lt;</span>
  <span>Prev</span>
</button>

<button className="flex h-[38px] w-[80px] items-center justify-center gap-2 rounded-md border border-[#D6D3D1] text-sm font-medium text-[#171717]">
  <span>Next</span>
  <span>&gt;</span>
</button>
        </div>

      </div>
    </section>
  );
}