"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  User,
  Table2,
  Bell,
  CreditCard,
  LogIn,
  UserPlus,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const mainLinks = [
  { title: "Dashboard", icon: LayoutDashboard, active: true },
  { title: "Profile", icon: User },
  { title: "Tables", icon: Table2 },
  { title: "Notifications", icon: Bell },
  { title: "Subscriptions", icon: CreditCard },
];

const authLinks = [
  { title: "Sign In", icon: LogIn },
  { title: "Sign Up", icon: UserPlus },
];

export default function Sidebar() {
  return (
    <aside className="w-[238px] min-h-screen bg-[#f5f5f4] ">
      <div className="flex flex-col gap-4 px-4 pt-[43px]">
        <h1 className="text-[18px] leading-7 font-semibold text-[#1C1917]">
          Material Shadcn
        </h1>

        <nav className="flex flex-col gap-4">
          <Button
            className="
              h-[38px] w-[208px] justify-start gap-3
              rounded-[8px] border border-[#1C1917]
              bg-gradient-to-b from-[#44403C] to-[#292524]
              px-4 text-[14px] font-normal text-[#FAFAF9]
              shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_1px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.35)]
              hover:from-[#44403C] hover:to-[#292524]
            "
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Button>

          <div className="flex flex-col gap-6">
            {mainLinks.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href="#"
                  className="flex h-5 w-[176px] items-center gap-3 px-4 text-[14px] font-normal leading-5 text-[#44403C]"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <Separator className="w-[208px] bg-[#e7e5e4]" />

        <div className="flex flex-col gap-4">
          <p className="px-4 text-[12px] font-semibold uppercase leading-4 text-[#78716C]">
            AUTH PAGES
          </p>

          <div className="flex flex-col gap-6">
            {authLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href="#"
                  className="flex h-5 w-[176px] items-center gap-3 px-4 text-[14px] font-normal leading-5 text-[#44403C]"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <Separator className="w-[208px] bg-[#e7e5e4]" />

        <Link
          href="#"
          className="flex h-5 w-[208px] items-center gap-3 px-4 text-[14px] font-normal leading-5 text-[#44403C]"
        >
          <BookOpen className="h-4 w-4 shrink-0" />
          <span>Documentation</span>
        </Link>
      </div>
    </aside>
  );
}