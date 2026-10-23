import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, RotateCcw, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-[#EAEAEA] bg-[#171717] pb-12 pt-10 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Quick Commerce Value Propositions */}
        <div className="grid grid-cols-1 gap-8 border-b border-neutral-800 pb-14 text-xs md:grid-cols-4">
          <div className="flex items-start gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="mb-1 font-bold tracking-tight text-white">
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
              <p className="mb-1 font-bold tracking-tight text-white">
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
              <p className="mb-1 font-bold tracking-tight text-white">
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
              <p className="mb-1 font-bold tracking-tight text-white">
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
            <p className="mb-4 max-w-sm text-xs leading-relaxed text-neutral-400">
              Modern fashion delivered fast. Discover everyday outfits, festive wear, and matching sets with quick doorstep delivery.
            </p>

            {/* Mobile App Download Badges (Future Launch / Coming Soon) */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD629]">
                  EXPERIENCE ON MOBILE • COMING SOON
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {/* Apple App Store Badge */}
                <div className="flex items-center gap-2.5 rounded-xl border border-neutral-700 bg-neutral-900/90 px-3.5 py-2 transition-all hover:border-[#FFD629] hover:bg-neutral-800">
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 384 512" aria-hidden="true">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Download on the</span>
                    <span className="text-xs font-bold tracking-tight text-white">App Store</span>
                  </div>
                </div>

                {/* Google Play Store Badge */}
                <div className="flex items-center gap-2.5 rounded-xl border border-neutral-700 bg-neutral-900/90 px-3.5 py-2 transition-all hover:border-[#FFD629] hover:bg-neutral-800">
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">GET IT ON</span>
                    <span className="text-xs font-bold tracking-tight text-white">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD629]/30 bg-[#FFD629]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FFD629]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD629]" />
              FASHION QUICK COMMERCE • TELANGANA &bull; ANDHRA PRADESH
            </div>
          </div>

          {/* Col 1: Shop */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-tight text-[#FFD629]">
              Shop Fast
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
                <Link href="/products?sort=newest" className="transition-colors hover:text-[#FFD629]">
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
            <h4 className="mb-4 text-xs font-bold tracking-tight text-[#FFD629]">
              Help &amp; Support
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
            <h4 className="mb-4 text-xs font-bold tracking-tight text-[#FFD629]">
              Company
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

        {/* Social Media & Trust Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 py-6 sm:flex-row">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
            <span>Show us some <span className="text-red-500">❤️</span> on our social media:</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Instagram */}
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-[#FFD629] hover:bg-[#FFD629] hover:text-black transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-[#FFD629] hover:bg-[#FFD629] hover:text-black transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>

            {/* Twitter / X */}
            <Link
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter X"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-[#FFD629] hover:bg-[#FFD629] hover:text-black transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* YouTube */}
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-[#FFD629] hover:bg-[#FFD629] hover:text-black transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-[11px] text-neutral-400 sm:flex-row">
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
