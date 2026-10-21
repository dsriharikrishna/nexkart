import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — NEXKART",
  description:
    "Learn about NEXKART, our fashion philosophy, and our fast delivery for shoppers in Hyderabad, Telangana, and Andhra Pradesh.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          ABOUT NEXKART
        </span>
        <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          Fashion Delivered in Minutes
        </h1>
        <p className="text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
          NEXKART is a fashion-first quick shopping platform built for everyday shoppers. We bring
          stylish clothes, comfortable fits, and trusted quality right to your doorstep in 45 to 60
          minutes.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
          alt="Fashion Collection"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-white">
          NEXKART • HYDERABAD &amp; ANDHRA PRADESH
        </div>
      </div>

      {/* Pillars */}
      <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs">
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
            OUR PROMISE 01
          </span>
          <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
            Fast Local Delivery
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600">
            We store real inventory in nearby neighborhood hubs across Hyderabad and surrounding cities so you get your outfits in minutes.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs">
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
            OUR PROMISE 02
          </span>
          <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
            Try Before You Decide
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600">
            Try your clothes on at your doorstep. If you need another size or want to return an item, swapping sizes is quick and hassle-free.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs">
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
            OUR PROMISE 03
          </span>
          <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
            Quality You Can Trust
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600">
            Every shirt, dress, jacket, and pair of pants is crafted with soft, durable fabrics designed for all-day comfort and long-lasting style.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-[#FFF9D6] p-10 text-center">
        <h3 className="mb-2 font-heading text-xl font-bold text-neutral-950">
          Find Your Next Favourite Outfit
        </h3>
        <p className="mx-auto mb-6 max-w-md text-xs text-neutral-700">
          Explore our collection of jackets, shirts, knitwear, and trousers ready for fast delivery.
        </p>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-800"
        >
          Start Shopping <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
