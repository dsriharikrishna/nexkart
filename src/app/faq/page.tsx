import Link from "next/link";

export const metadata = {
  title: "Atelier FAQ — NEXKART ATELIER",
  description:
    "Frequently asked questions regarding international courier transit, returns, textile care, and sizing.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Where are NEXKART garments crafted?",
      a: "Our tailoring and overcoats are designed at our Mumbai flagship atelier and handcrafted in collaboration with master artisanal weavers across India, Kashmir, and historic textile centers in Biella and Okayama.",
    },
    {
      q: "What is your complimentary courier policy?",
      a: "All orders exceeding ₹5,000 receive complimentary express courier service (via Blue Dart & DHL Express) across all pincodes in India with door-to-door tracking. All GST is inclusive.",
    },
    {
      q: "How do returns and size exchanges function?",
      a: "We offer a 30-day return window from receipt. A pre-paid return label is included in every package, and doorstep courier pickup can be requested directly through your client account.",
    },
    {
      q: "How should I care for my cashmere and silk pieces?",
      a: "Pure cashmere and artisanal silk are self-cleaning natural fibers that benefit from resting between wears. We advise washing sparingly by hand in cold water with pH-neutral shampoo, then drying flat on a towel.",
    },
    {
      q: "Can I try garments on in person?",
      a: "Our private Mumbai flagship showroom in the Kala Ghoda Arts District welcomes clients by appointment. You can request a private appointment with a client styling advisor via concierge@nexkart.com or WhatsApp.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          CLIENT KNOWLEDGE BASE
        </span>
        <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Frequently Asked Inquiries
        </h1>
        <p className="text-xs font-light text-neutral-500 sm:text-sm">
          Essential details regarding global courier transit, sizing, fabric care, and atelier
          appointments.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-neutral-200 bg-white p-6">
            <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-neutral-950">
              <span className="text-[#9E643C]">0{idx + 1}.</span> {faq.q}
            </h3>
            <p className="pl-6 text-xs font-light leading-relaxed text-neutral-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-neutral-500">
        Still require sartorial assistance?{" "}
        <Link href="/contact" className="font-semibold text-black underline underline-offset-4">
          Speak with our Private Concierge
        </Link>
      </div>
    </div>
  );
}
