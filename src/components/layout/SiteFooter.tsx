import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, RotateCcw, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#EAEAEA] bg-[#171717] pb-12 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quick Commerce Value Propositions */}
        <div className="grid grid-cols-1 gap-8 border-b border-neutral-800 pb-14 text-xs md:grid-cols-4">
          <div className="flex items-start gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="mb-1 font-bold uppercase tracking-wider text-white">
                45-60 Min Delivery
              </p>
              <p className="leading-relaxed text-[#707070]">
                Fast delivery across active cities in Telangana and Andhra Pradesh.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
              <RotateCcw className="h-4 w-4" />
            </div>
            <div>
              <p className="mb-1 font-bold uppercase tracking-wider text-white">
                Doorstep Size Exchange
              </p>
              <p className="leading-relaxed text-[#707070]">
                Try your clothes at home and exchange sizes easily right at your door.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="mb-1 font-bold uppercase tracking-wider text-white">
                100% Genuine Quality
              </p>
              <p className="leading-relaxed text-[#707070]">
                Authentic clothes sourced directly from verified brands and creators.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
              <Zap className="h-4 w-4 fill-[#171717]" />
            </div>
            <div>
              <p className="mb-1 font-bold uppercase tracking-wider text-white">
                Easy Payment Options
              </p>
              <p className="leading-relaxed text-[#707070]">
                Pay smoothly with UPI, cards, or choose Cash on Delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-heading text-2xl font-black uppercase tracking-[0.2em] text-white">
                NEXKART
              </span>
              <span className="h-2 w-2 rounded-full bg-[#FFD629]" />
            </div>
            <p className="mb-6 max-w-sm text-xs leading-relaxed text-neutral-400">
              Modern fashion delivered fast. Discover everyday outfits, festive wear, and matching sets with quick doorstep delivery.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD629]/30 bg-[#FFD629]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FFD629]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD629]" />
              FASHION QUICK COMMERCE • MUMBAI &bull; DELHI &bull; BENGALURU
            </div>
          </div>

          {/* Col 1: Shop */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD629]">
              SHOP FAST
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/collections/women" className="transition-colors hover:text-[#FFD629]">
                  Women&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="transition-colors hover:text-[#FFD629]">
                  Men&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="transition-colors hover:text-[#FFD629]">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/categories/outerwear" className="transition-colors hover:text-[#FFD629]">
                  Outerwear &amp; Coats
                </Link>
              </li>
              <li>
                <Link href="/categories/tailoring" className="transition-colors hover:text-[#FFD629]">
                  Modern Tailoring
                </Link>
              </li>
              <li>
                <Link href="/categories/shirts" className="transition-colors hover:text-[#FFD629]">
                  Shirts &amp; T-Shirts
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Customer Care */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD629]">
              HELP &amp; SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/account" className="transition-colors hover:text-[#FFD629]">
                  Track Orders
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="transition-colors hover:text-[#FFD629]">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-[#FFD629]">
                  Delivery PIN Codes &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#FFD629]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="transition-colors hover:text-[#FFD629]">
                  Saved Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD629]">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-[#FFD629]">
                  About Nexkart
                </Link>
              </li>
              <li>
                <Link href="/collections" className="transition-colors hover:text-[#FFD629]">
                  All Lookbooks
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="flex items-center gap-1 transition-colors hover:text-[#FFD629]">
                  Exclusive Drops <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <span className="text-[11px] text-neutral-500">
                  Quick Commerce Hubs Active
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 text-[11px] text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} NEXKART COMMERCE TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-5">
            <span>TERMS &amp; PRIVACY</span>
            <span>SHIPPING POLICY</span>
            <span className="text-[#FFD629]">SIMULATED QUICK-COMMERCE PROTOTYPE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
