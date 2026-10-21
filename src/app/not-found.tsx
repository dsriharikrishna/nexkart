import Link from "next/link";
import { ArrowLeft, Compass, ShoppingBag, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl text-center">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD629] bg-[#FFF9D6] px-4 py-1.5 text-xs font-bold text-[#171717]">
          <Sparkles className="h-3.5 w-3.5 text-[#171717]" />
          <span>Quick-Commerce Fashion Hub</span>
        </div>

        {/* Big 404 Display */}
        <div className="my-6">
          <h1 className="font-heading text-7xl font-black tracking-tight text-[#171717] sm:text-9xl">
            4<span className="text-[#FFD629]">0</span>4
          </h1>
          <p className="mt-3 font-heading text-xl font-bold uppercase tracking-wider text-neutral-900 sm:text-2xl">
            Page Not Found
          </p>
          <p className="mx-auto mt-2 max-w-md text-xs font-light text-neutral-600 sm:text-sm">
            The page, collection, or product you are looking for has been moved, renamed, or is currently out of stock.
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#171717] shadow-md transition-all hover:brightness-105 active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#171717] transition-all hover:border-black hover:bg-neutral-50 active:scale-[0.98]"
          >
            <Compass className="h-4 w-4" />
            Explore Categories
          </Link>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-black active:scale-[0.98]"
          >
            <ShoppingBag className="h-4 w-4" />
            All Clothes
          </Link>
        </div>

        {/* Quick Links Footer */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Popular Destinations
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-medium text-neutral-800">
            <Link href="/categories/outerwear" className="hover:text-[#FFB800] underline-offset-4 hover:underline">
              Jackets &amp; Coats
            </Link>
            <span>•</span>
            <Link href="/categories/dresses" className="hover:text-[#FFB800] underline-offset-4 hover:underline">
              Dresses
            </Link>
            <span>•</span>
            <Link href="/categories/shirts" className="hover:text-[#FFB800] underline-offset-4 hover:underline">
              Shirts &amp; Tops
            </Link>
            <span>•</span>
            <Link href="/categories/jewelry" className="hover:text-[#FFB800] underline-offset-4 hover:underline">
              Fine Jewelry
            </Link>
            <span>•</span>
            <Link href="/new-arrivals" className="hover:text-[#FFB800] underline-offset-4 hover:underline">
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
