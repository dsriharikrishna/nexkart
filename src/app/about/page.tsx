import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Atelier Story — NEXKART ATELIER",
  description:
    "Learn about the sartorial philosophy, Indian heritage craftsmanship, and global luxury standards behind NEXKART.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          FOUNDED IN INDIA • EST. 2024
        </span>
        <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          Form, Restraint, and Textile Longevity.
        </h1>
        <p className="text-sm font-light leading-relaxed text-neutral-600 sm:text-base">
          NEXKART ATELIER was founded on a simple dissatisfaction with rapid seasonal consumption.
          Rooted in India’s peerless artisanal textile traditions and modern architectural geometry,
          we construct garments designed to outlive trends and gain character over decades of wear.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative mb-16 aspect-[16/9] overflow-hidden bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
          alt="Atelier Workshop"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-white">
          ATELIER FLAGSHIP • KALA GHODA, MUMBAI, INDIA
        </div>
      </div>

      {/* Pillars */}
      <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
            PILLAR 01
          </span>
          <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
            The Mongolian Cashmere Standard
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600">
            We partner directly with nomadic pastoralists in Inner Mongolia to harvest only
            15.5-micron underfleece. Spun in Piedmont into dense 4-ply yarns that resist pilling.
          </p>
        </div>

        <div>
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
            PILLAR 02
          </span>
          <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
            Deconstructed Tailoring
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600">
            By shedding excessive padding and rigid horsehair canvassing, our suiting adapts to the
            body’s kinetic movement while maintaining unmistakable sharp proportions.
          </p>
        </div>

        <div>
          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
            PILLAR 03
          </span>
          <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
            Zero Deadstock Mandate
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600">
            Our capsule editions are restricted to strictly numbered production batches of 150 to
            300 pieces worldwide, eliminating industrial textile waste entirely.
          </p>
        </div>
      </div>

      <div className="border border-neutral-200 bg-neutral-100 p-10 text-center">
        <h3 className="mb-2 font-heading text-xl font-bold text-neutral-950">
          Experience the Autumn/Winter Atelier
        </h3>
        <p className="mx-auto mb-6 max-w-md text-xs text-neutral-600">
          Explore double-faced cashmere overcoats, tropical wool blazers, and artisanal footwear.
        </p>
        <Link
          href="/collections/atelier-autumn"
          className="inline-flex items-center gap-2 bg-neutral-950 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#9E643C]"
        >
          Discover The Pieces <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
