import { Zap, Shirt, RotateCcw } from "lucide-react";

export function HyderabadBrandBanner() {
  return (
    <section className="w-full bg-neutral-50/60 py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Left-aligned and capitalized without description */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
            HYDERABAD&apos;S FASTEST DELIVERY
          </h2>
        </div>

        {/* 3D Value Badges: 60 MIN DELIVERY, TRY N BUY, 60 MIN RETURN with descriptions */}
        <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {/* Badge 1: Red Glossy "HELLO WE DELIVER IN 60 MIN" */}
          <div className="flex flex-col items-center text-center">
            <div className="relative -rotate-2 transition-none">
              <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-white/60 bg-gradient-to-b from-[#ff3344] via-[#e5192c] to-[#b30e1d] px-5 py-3 text-white shadow-md shadow-red-500/20 ring-2 ring-red-400/40 cursor-default">
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
            <p className="mt-3 text-xs font-semibold text-neutral-700 max-w-[200px]">
              Lightning-fast doorstep drops across Hyderabad express micro-hubs.
            </p>
          </div>

          {/* Badge 2: Green Shield "TRY N BUY" */}
          <div className="flex flex-col items-center text-center">
            <div className="relative z-10 transition-none">
              <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-white/70 bg-gradient-to-b from-[#10b981] via-[#059669] to-[#047857] px-6 py-3.5 text-white shadow-md shadow-emerald-500/20 ring-2 ring-emerald-400/40 cursor-default">
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
            <p className="mt-3 text-xs font-semibold text-neutral-700 max-w-[200px]">
              Try different sizes in the comfort of your home before you pay.
            </p>
          </div>

          {/* Badge 3: Blue Elliptical "60 MIN RETURN" */}
          <div className="flex flex-col items-center text-center">
            <div className="relative rotate-2 transition-none">
              <div className="relative flex flex-col items-center justify-center rounded-full border-2 border-white/60 bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] px-6 py-3 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-400/40 cursor-default">
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
            <p className="mt-3 text-xs font-semibold text-neutral-700 max-w-[200px]">
              Hassle-free instant doorstep exchange and quick UPI refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


