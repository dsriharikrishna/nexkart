import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us — NEXKART",
  description:
    "Get in touch with our customer support team for help with your orders, fast delivery, returns, or sizes.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          CUSTOMER SUPPORT
        </span>
        <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
          Contact Us
        </h1>
        <p className="text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
          Have a question about an order, delivery time, or sizing? Our support team is here to help you every day.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-xs">
          <Mail className="mx-auto mb-4 h-6 w-6 text-[#9E643C]" />
          <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Email &amp; Phone Support
          </h3>
          <p className="mb-4 text-xs text-neutral-500">
            We reply to all emails within a few hours.
          </p>
          <a
            href="mailto:support@nexkart.com"
            className="text-xs font-semibold text-neutral-950 underline hover:text-[#9E643C]"
          >
            support@nexkart.com
          </a>
          <p className="mt-2 text-[11px] text-neutral-500">Helpline / WhatsApp: +91 99001 61030</p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-xs">
          <MapPin className="mx-auto mb-4 h-6 w-6 text-[#9E643C]" />
          <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Regional Hub
          </h3>
          <p className="mb-4 text-xs text-neutral-500">Local fulfillment and service center.</p>
          <span className="block text-xs font-semibold text-neutral-950">
            Road No. 36, Jubilee Hills • Hyderabad 500034, India
          </span>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-xs">
          <Clock className="mx-auto mb-4 h-6 w-6 text-[#9E643C]" />
          <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Support Hours
          </h3>
          <p className="mb-4 text-xs text-neutral-500">Monday to Friday: 9:00 AM – 9:00 PM</p>
          <span className="block text-xs font-semibold text-neutral-950">
            Saturday &amp; Sunday: 10:00 AM – 8:00 PM
          </span>
        </div>
      </div>
    </div>
  );
}
