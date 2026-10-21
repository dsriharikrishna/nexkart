import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions — NEXKART",
  description:
    "Common questions about fast delivery, doorstep try-on, size swaps, returns, and payment options.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "How fast is delivery?",
      a: "Eligible orders in supported areas are delivered in 45 to 60 minutes from our nearest local fulfillment hubs. Orders to other areas usually arrive within 1 to 2 business days.",
    },
    {
      q: "How much does delivery cost?",
      a: "Fast delivery is completely free on all orders over ₹2,500. For orders under ₹2,500, a small flat fee of ₹150 applies at checkout.",
    },
    {
      q: "How does doorstep try-on and size exchange work?",
      a: "When your delivery arrives, you can try on your clothes to check the fit. If you need a different size, you can swap it right away or request an exchange within 30 days directly from your account.",
    },
    {
      q: "How do returns and refunds work?",
      a: "We offer a simple 30-day return policy. If you are not satisfied with an item, request a pickup from your account page, and our courier will collect it from your doorstep. Refunds are processed quickly to your original payment method.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm, CRED), Cash on Delivery, credit and debit cards, and net banking from major Indian banks.",
    },
    {
      q: "How do I choose the right size?",
      a: "Check our detailed Size Guide for chest, waist, and hip measurements. If you are in between sizes, we recommend choosing your regular size for standard fits or checking the fit notes on each product page.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          HELP &amp; SUPPORT
        </span>
        <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="text-xs font-light text-neutral-500 sm:text-sm">
          Everything you need to know about delivery, size exchanges, returns, and payments.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-neutral-200 bg-white p-6 rounded-xl shadow-xs">
            <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold text-neutral-950">
              <span className="text-[#9E643C]">0{idx + 1}.</span> {faq.q}
            </h3>
            <p className="pl-6 text-xs font-light leading-relaxed text-neutral-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-neutral-500">
        Still have questions?{" "}
        <Link href="/contact" className="font-semibold text-black underline underline-offset-4">
          Contact our customer support team
        </Link>
      </div>
    </div>
  );
}
