"use client";

import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div
      className="
        bg-white 
        border border-[#E7E5E4]
        rounded-2xl
        p-6
      "
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5">

        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/images/avatar.png"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold text-black">
            Nida
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Full Stack Developer
          </p>

          <p className="text-sm text-gray-500 mt-3 max-w-xl">
            Hi, I’m a developer passionate about creating modern
            web applications and beautiful user experiences.
          </p>
        </div>

      </div>


      {/* Tabs */}
      <div className="flex gap-8 mt-6 border-t border-gray-200 pt-4">

        <button className="text-sm font-semibold text-black">
          App
        </button>

        <button className="text-sm text-gray-500">
          Messages
        </button>

        <button className="text-sm text-gray-500">
          Settings
        </button>

      </div>

    </div>
  );
}