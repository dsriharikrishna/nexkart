"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CampaignSlide {
  image: string;
  href: string;
  alt: string;
}

const CAMPAIGN_SLIDES: CampaignSlide[] = [
  {
    image: "/nexkart_festive_hero.jpg",
    href: "/products",
    alt: "Autumn Atelier & Festive Collection Editorial Campaign",
  },
  {
    image: "/images/products/outerwear/prod-01-1.webp",
    href: "/products?namex=Tokyo%20Talkies",
    alt: "Contemporary Editorial Womenswear Campaign",
  },
  {
    image: "/images/products/outerwear/prod-02-1.webp",
    href: "/products?namex=Bewakoof",
    alt: "Modern Tailoring & Menswear Campaign",
  },
  {
    image: "/images/products/dresses/prod-08-1.webp",
    href: "/products?namex=Aadvi%20Fashion",
    alt: "Evening Luxe & Festive Picks Editorial Campaign",
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
    const interval = setInterval(nextSlide, 5000);
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
        {/* 16:9 on desktop, 4:5 on mobile for pure fashion photography - Full bleed edge-to-edge */}
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
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Link>
          );
        })}

        {/* Minimal Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/30 text-white/90 backdrop-blur-md transition-all hover:bg-black/60 hover:scale-105 active:scale-95 focus:outline-hidden"
          aria-label="Previous Campaign Slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/30 text-white/90 backdrop-blur-md transition-all hover:bg-black/60 hover:scale-105 active:scale-95 focus:outline-hidden"
          aria-label="Next Campaign Slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Minimal Pagination Dots */}
        <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center gap-2">
          {CAMPAIGN_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all rounded-full ${
                idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
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
