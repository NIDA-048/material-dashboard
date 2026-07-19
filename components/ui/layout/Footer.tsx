"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8">
      {/* Top Border */}
      <div className="h-px w-full bg-[#E7E5E4]" />

      {/* Content */}
      <div className="mt-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-1 text-xs text-[#78716C]">
          <span>© 2025, made with</span>

          <Heart
            size={14}
            className="fill-[#EF4444] text-[#EF4444]"
          />

          <span>by Creative Tim for a better web.</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xs text-[#78716C]">
          <a href="#" className="hover:text-black transition-colors">
            Creative Tim
          </a>

          <a href="#" className="hover:text-black transition-colors">
            About Us
          </a>

          <a href="#" className="hover:text-black transition-colors">
            Blog
          </a>

          <a href="#" className="hover:text-black transition-colors">
            License
          </a>
        </div>
      </div>
    </footer>
  );
}