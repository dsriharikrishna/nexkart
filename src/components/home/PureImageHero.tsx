"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CampaignSlide {
  image: string;
  href: string;
  alt: string;
  segmentTag: string;
  editorialTitle: string;
  editorialSub: string;
  discountBadge: string;
  deliveryNote: string;
}

const CAMPAIGN_SLIDES: CampaignSlide[] = [
  {
    image: "/images/hero_segment_discounts.jpg",
    href: "/products",
    alt: "Commercial Fashion Festival Blockbuster Sale • Up to 70% Off",
    segmentTag: "FESTIVAL BLOCKBUSTER",
    editorialTitle: "The Great Wardrobe Refresh",
    editorialSub: "Curated Diwali drops from 500+ homegrown brands & modern ethnic labels",
    discountBadge: "Flat 70% Off Live",
    deliveryNote: "⚡ 60-min delivery • Try & Buy at doorstep",
  },
  {
    image: "/images/hero_segment_festive.jpg",
    href: "/products?category=tailoring",
    alt: "Royal Festive Fusion • Kanjeevaram Saree & Modern Ivory Bandhgala",
    segmentTag: "FESTIVE COUTURE",
    editorialTitle: "The Royal Festive Chapter",
    editorialSub: "Pure hand-embossed gold zari silk & tailored raw silk bandhgalas",
    discountBadge: "Artisan Edition",
    deliveryNote: "⚡ Doorstep fitting across Jubilee & Banjara Hills",
  },
  {
    image: "/images/hero_segment_authentic.jpg",
    href: "/products?category=outerwear",
    alt: "Heritage Meets Luxury • Authentic Handwoven Zari & Artisan Silks",
    segmentTag: "AUTHENTIC HANDLOOM",
    editorialTitle: "Kanchipuram & Chanderi Weaves",
    editorialSub: "Woven by 3rd-generation master craftspeople with certified Silk Mark authenticity",
    discountBadge: "Craftmark Certified",
    deliveryNote: "⚡ 100% Verified Pure Silk Mark",
  },
  {
    image: "/images/slikk_genz_hero_1.jpg",
    href: "/products?namex=Snitch",
    alt: "Gen-Z Urban Noise & Streetwear Ultra-Hyped Drop",
    segmentTag: "STREET CULTURE '25",
    editorialTitle: "Rebel Youth • Boxy Drop",
    editorialSub: "Heavyweight 380 GSM graphic hoodies & wide-leg utility cargos",
    discountBadge: "Limited Run 500 Units",
    deliveryNote: "⚡ Under 45 mins • Instant doorstep size exchange",
  },
  {
    image: "/images/slikk_genz_hero_2.jpg",
    href: "/products?namex=Tokyo%20Talkies",
    alt: "Cyber Tokyo Neon Fashion & Streetwear Vogue",
    segmentTag: "AFTER-HOURS VOGUE",
    editorialTitle: "Cyber Tokyo Night Out",
    editorialSub: "Holographic metallic puffers, wet-look satin & statement shades",
    discountBadge: "Trending On Slikk",
    deliveryNote: "⚡ Delivered before midnight across Hyderabad",
  },
  {
    image: "/images/slikk_genz_hero_3.jpg",
    href: "/products?namex=Snitch",
    alt: "Urban Essentials & Boxy Knit Streetwear Drop",
    segmentTag: "MODERN MINIMALISM",
    editorialTitle: "Tactile Textures & Oversized Knits",
    editorialSub: "Relaxed waffle-knit tops & slouchy pleated trousers for everyday movement",
    discountBadge: "Staff Pick",
    deliveryNote: "⚡ 60-min express try-n-buy eligible",
  },
];

export function PureImageHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGN_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAMPAIGN_SLIDES.length) % CAMPAIGN_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="w-full bg-white py-0 sm:py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Editorial Campaign Carousel"
    >
      <div className="w-full px-0 sm:px-6 lg:px-8">
        {/* Full-bleed edge-to-edge campaign display with human editorial vignette */}
        <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] w-full max-h-[75vh] overflow-hidden rounded-none sm:rounded-3xl shadow-xs bg-neutral-950">
          {CAMPAIGN_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <Link
                key={slide.image}
                href={slide.href}
                className={`absolute inset-0 block h-full w-full transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-label={slide.alt}
                tabIndex={isActive ? 0 : -1}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover object-center transform scale-100 transition-transform duration-10000 ease-out hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Filmic Vignette & Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 sm:from-black/80 sm:via-transparent sm:to-black/20" />

                {/* Top Badge Indicators (Human Brand & Segment Authenticity) */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/70 px-3 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFD629] backdrop-blur-md shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD629] animate-ping" />
                    {slide.segmentTag}
                  </span>
                  <span className="hidden sm:inline-flex rounded-full bg-white/20 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">
                    {slide.discountBadge}
                  </span>
                </div>

                {/* Bottom Editorial Narrative (Human Touch: Real curation, fabric specs, local delivery notes) */}
                <div className="absolute bottom-10 left-4 right-4 sm:bottom-10 sm:left-8 sm:right-auto sm:max-w-xl z-20 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFD629] drop-shadow-md">
                    {slide.deliveryNote}
                  </span>
                  <h2 className="mt-1 font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight drop-shadow-lg leading-tight">
                    {slide.editorialTitle}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-200 line-clamp-2 drop-shadow-sm font-medium">
                    {slide.editorialSub}
                  </p>

                  <div className="mt-3.5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#FFD629] hover:scale-105 active:scale-95 shadow-md">
                      Explore Collection →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Minimal Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 active:scale-95 focus:outline-hidden"
            aria-label="Previous Campaign Slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 active:scale-95 focus:outline-hidden"
            aria-label="Next Campaign Slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Modern Pagination Bar */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {CAMPAIGN_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  idx === currentIndex ? "w-6 bg-[#FFD629]" : "w-1.5 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
