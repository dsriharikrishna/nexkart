import Link from "next/link";
import { ShieldCheck, Sparkles, Shirt, RotateCcw, Zap } from "lucide-react";

export function HyderabadBrandBanner() {
  return (
    <section className="w-full bg-neutral-50/60 py-6 sm:py-6 border-t border-b border-neutral-150">
      <div className="w-full px-4 text-center sm:px-6 lg:px-8">
        {/* Header Heading: "Hyderabad's fastest" in italic serif + "fashion x lifestyle app" */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
            Hyderabad&apos;s fastest
          </h2>
          <p className="mt-1 font-heading text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#707070]">
            fashion x lifestyle app
          </p>
        </div>

        {/* Glossy / 3D Badge Trio: 60 MIN DELIVERY, TRY N BUY, 60 MIN RETURN */}
        <div className="relative mx-auto my-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl">
          {/* Badge 1: Red Glossy "HELLO WE DELIVER IN 60 MIN" */}
          <div className="relative group transform -rotate-6 transition-all hover:rotate-0 hover:scale-105 active:scale-95 duration-200">
            <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-white/60 bg-gradient-to-b from-[#ff3344] via-[#e5192c] to-[#b30e1d] px-5 py-3 text-white shadow-xl shadow-red-500/25 ring-2 ring-red-400/40">
              {/* Gloss shine highlight */}
              <div className="absolute inset-x-2 top-1 h-3 rounded-t-xl bg-white/30 blur-[1px]" />
              <span className="text-[9px] font-black uppercase tracking-wider text-white/90 drop-shadow-xs">
                HELLO WE DELIVER IN
              </span>
              <div className="flex items-center gap-1 font-heading text-xl sm:text-2xl font-black tracking-tight leading-none text-white drop-shadow-md">
                <span>60</span>
                <span className="text-[#FFD629]">MIN</span>
                <Zap className="h-4 w-4 fill-[#FFD629] text-[#FFD629]" />
              </div>
            </div>
          </div>

          {/* Badge 2: Green Triangle / Shield "TRY N BUY" */}
          <div className="relative group z-10 transform -rotate-1 transition-all hover:rotate-0 hover:scale-105 active:scale-95 duration-200">
            <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-white/70 bg-gradient-to-b from-[#10b981] via-[#059669] to-[#047857] px-6 py-3.5 text-white shadow-xl shadow-emerald-500/25 ring-2 ring-emerald-400/40">
              {/* Gloss shine highlight */}
              <div className="absolute inset-x-2 top-1 h-3.5 rounded-t-xl bg-white/35 blur-[1px]" />
              <Shirt className="h-4 w-4 mb-0.5 text-emerald-100" />
              <div className="font-heading text-base sm:text-lg font-black tracking-wider uppercase leading-none drop-shadow-md">
                <span>TRY</span>
                <span className="text-[#FFF9D6] mx-0.5">N</span>
                <span>BUY</span>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-100/90 mt-0.5">
                AT YOUR DOORSTEP
              </span>
            </div>
          </div>

          {/* Badge 3: Blue Elliptical "60 MIN RETURN" */}
          <div className="relative group transform rotate-6 transition-all hover:rotate-0 hover:scale-105 active:scale-95 duration-200">
            <div className="relative flex flex-col items-center justify-center rounded-full border-2 border-white/60 bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] px-6 py-3 text-white shadow-xl shadow-blue-500/25 ring-2 ring-blue-400/40">
              {/* Gloss shine highlight */}
              <div className="absolute inset-x-3 top-1 h-3 rounded-full bg-white/30 blur-[1px]" />
              <div className="flex items-center gap-1 font-heading text-lg sm:text-xl font-black tracking-tight leading-none drop-shadow-md">
                <span className="text-[#FFD629]">60</span>
                <span>MIN</span>
                <RotateCcw className="h-3.5 w-3.5 text-blue-200" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-wider text-blue-100 drop-shadow-xs">
                EASY RETURN
              </span>
            </div>
          </div>
        </div>

        {/* Hyderabad Hubs Indicator Pill */}
        <div className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
            Live across Hyderabad:
          </span>
          {["HITEC City", "Gachibowli", "Banjara Hills", "Jubilee Hills", "Kondapur", "Madhapur", "Secunderabad"].map((loc) => (
            <span
              key={loc}
              className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-[#171717] shadow-2xs"
            >
              📍 {loc}
            </span>
          ))}
        </div>

        {/* Bottom Feature Badges & Social Row identical to reference */}
        <div className="mt-10 border-t border-neutral-200/80 pt-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4 text-xs font-semibold text-[#171717]">
            {/* 4 Trust Icons */}
            <div className="grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-center sm:text-left">
                <ShieldCheck className="h-4 w-4 text-[#FFB800]" />
                <span className="text-[11px] font-bold">Secure Payments</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-center sm:text-left">
                <Sparkles className="h-4 w-4 text-[#FFB800]" />
                <span className="text-[11px] font-bold">Genuine Product</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-center sm:text-left">
                <Shirt className="h-4 w-4 text-[#FFB800]" />
                <span className="text-[11px] font-bold">Try &amp; Buy</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-center sm:text-left">
                <RotateCcw className="h-4 w-4 text-[#FFB800]" />
                <span className="text-[11px] font-bold">7 Day Return</span>
              </div>
            </div>

            {/* Social Media Link Callout: Show us some ❤️ on our social media */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-neutral-800">
                Show us some <span className="text-red-500">❤️</span> on our social media
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 hover:border-[#FFD629] hover:bg-[#FFF9D6] transition-colors"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 hover:border-[#FFD629] hover:bg-[#FFF9D6] transition-colors"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
