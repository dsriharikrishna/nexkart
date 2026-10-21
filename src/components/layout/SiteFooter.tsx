import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Truck, RefreshCw, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-900 bg-[#0A0A0A] pb-12 pt-16 text-[#FBF9F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Value Propositions */}
        <div className="grid grid-cols-1 gap-8 border-b border-neutral-800/80 pb-14 text-xs md:grid-cols-4">
          <div className="flex items-start gap-3.5">
            <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF62]" />
            <div>
              <p className="mb-1 font-semibold uppercase tracking-[0.1em] text-white">
                Priority Express Transit
              </p>
              <p className="leading-relaxed text-neutral-400">
                Complimentary delivery across India on orders over ₹5,000.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <RefreshCw className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF62]" />
            <div>
              <p className="mb-1 font-semibold uppercase tracking-[0.1em] text-white">
                Complimentary Returns
              </p>
              <p className="leading-relaxed text-neutral-400">
                30-day effortless return window with door-to-door courier pickup.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF62]" />
            <div>
              <p className="mb-1 font-semibold uppercase tracking-[0.1em] text-white">
                Artisanal Provenance
              </p>
              <p className="leading-relaxed text-neutral-400">
                Pure Mongolian cashmere, Okayama selvedge, and Indian craftsmanship.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF62]" />
            <div>
              <p className="mb-1 font-semibold uppercase tracking-[0.1em] text-white">
                Private Client Styling
              </p>
              <p className="leading-relaxed text-neutral-400">
                Virtual sartorial appointments and tailored fit recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-heading text-2xl font-black uppercase tracking-[0.22em] text-[#F7F3EA]">
                NEXKART
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF62]" />
            </div>
            <p className="mb-6 max-w-sm text-xs leading-relaxed text-neutral-400">
              An independent Indian sartorial house designing enduring luxury apparel for discerning
              wardrobes. Obsidian black, champagne gold, antique accents, and pure architectural
              form.
            </p>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF62]">
              KALA GHODA ARTS DISTRICT • MUMBAI 400001, INDIA
            </div>
          </div>

          {/* Col 1: Shop */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/collections/women" className="transition-colors hover:text-white">
                  Womenswear
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="transition-colors hover:text-white">
                  Menswear
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/atelier-autumn"
                  className="transition-colors hover:text-white"
                >
                  Atelier Autumn FW26
                </Link>
              </li>
              <li>
                <Link href="/categories/outerwear" className="transition-colors hover:text-white">
                  Outerwear & Coats
                </Link>
              </li>
              <li>
                <Link href="/categories/tailoring" className="transition-colors hover:text-white">
                  Modern Tailoring
                </Link>
              </li>
              <li>
                <Link href="/categories/knitwear" className="transition-colors hover:text-white">
                  Cashmere Knitwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Client Care */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              CLIENT SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/account" className="transition-colors hover:text-white">
                  My Orders & Account
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="transition-colors hover:text-white">
                  Sartorial Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-white">
                  Shipping & Customs FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Private Concierge
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="transition-colors hover:text-white">
                  Wishlist & Saved Edits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Maison */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              THE MAISON
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  Atelier Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/monochrome-series"
                  className="transition-colors hover:text-white"
                >
                  Monochrome Study
                </Link>
              </li>
              <li>
                <a
                  href="#newsletter"
                  className="flex items-center gap-1 transition-colors hover:text-white"
                >
                  Private Dispatch <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <span className="cursor-not-allowed text-neutral-600">
                  Mumbai Flagship Showroom (By Appointment)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 text-[11px] text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} NEXKART ATELIER SRL. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>TERMS OF ENGAGEMENT</span>
            <span>PRIVACY DISCLOSURE</span>
            <span>COOKIE ARCHITECTURE</span>
            <span className="text-[#C5A059]">SIMULATED COMMERCE ENVIRONMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
