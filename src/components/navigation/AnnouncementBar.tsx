"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative flex items-center justify-center border-b border-neutral-900 bg-[#101010] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F7F3EA] transition-all duration-300">
      <div className="flex items-center gap-2">
        <Sparkles className="h-3 w-3 animate-pulse text-[#D4AF62]" />
        <span>COMPLIMENTARY EXPRESS PRIORITY COURIER ACROSS INDIA OVER ₹5,000</span>
        <span className="hidden text-neutral-600 md:inline">•</span>
        <Link
          href="/collections/atelier-autumn"
          className="hidden text-[#D4AF62] underline underline-offset-4 transition-colors hover:text-[#EED8A1] md:inline"
        >
          EXPLORE ATELIER FW26
        </Link>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 p-1 text-neutral-400 transition-colors hover:text-white"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
