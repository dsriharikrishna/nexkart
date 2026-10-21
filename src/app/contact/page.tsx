import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Client Concierge — NEXKART ATELIER",
  description:
    "Connect with our private client advisors in Mumbai for bespoke styling, sizing advice, and pan-India order inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          PRIVATE SARTORIAL DESK
        </span>
        <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          Client Concierge & Showroom
        </h1>
        <p className="text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
          Our Mumbai client advisors are available to assist with bespoke appointments, sizing
          queries, and pan-India courier routing.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="border border-neutral-200 bg-white p-8 text-center">
          <Mail className="mx-auto mb-4 h-6 w-6 text-[#9E643C]" />
          <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Digital Concierge
          </h3>
          <p className="mb-4 text-xs text-neutral-500">
            Inquiries answered within 4 business hours.
          </p>
          <a
            href="mailto:concierge@nexkart.com"
            className="text-xs font-semibold text-neutral-950 underline hover:text-[#9E643C]"
          >
            concierge@nexkart.com
          </a>
          <p className="mt-2 text-[11px] text-neutral-500">WhatsApp / Hotline: +91 99001 61030</p>
        </div>

        <div className="border border-neutral-200 bg-white p-8 text-center">
          <MapPin className="mx-auto mb-4 h-6 w-6 text-[#9E643C]" />
          <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Mumbai Flagship Showroom
          </h3>
          <p className="mb-4 text-xs text-neutral-500">Private styling appointments only.</p>
          <span className="block text-xs font-semibold text-neutral-950">
            Kala Ghoda Arts District • Mumbai 400001, India
          </span>
        </div>

        <div className="border border-neutral-200 bg-white p-8 text-center">
          <Clock className="mx-auto mb-4 h-6 w-6 text-[#9E643C]" />
          <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Atelier Hours (IST)
          </h3>
          <p className="mb-4 text-xs text-neutral-500">Monday – Friday: 10:00 to 20:00 IST</p>
          <span className="block text-xs font-semibold text-neutral-950">
            Saturday & Sunday: 11:00 to 19:00 IST
          </span>
        </div>
      </div>
    </div>
  );
}
