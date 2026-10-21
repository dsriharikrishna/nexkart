"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [genderPreference, setGenderPreference] = useState<"all" | "women" | "men">("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <section
      id="newsletter"
      className="border-y border-neutral-800 bg-neutral-900 py-20 text-white"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFD629]">
          STAY UPDATED
        </span>
        <h2 className="mb-4 font-heading text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
          Get New Arrivals and Offers First
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-xs leading-relaxed text-neutral-400 sm:text-sm">
          Sign up to hear about new clothing drops, sales, and special discounts. No spam, ever.
        </p>

        {status === "success" ? (
          <div className="mx-auto max-w-md rounded-3xl border border-[#FFD629]/40 bg-[#101010]/90 p-6 text-center">
            <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-[#FFD629]" />
            <p className="font-heading text-sm font-bold tracking-wide text-white">
              YOU&apos;RE ON THE LIST!
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Thanks for subscribing. We will send you new arrivals and updates soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            {/* Preferences */}
            <div className="mb-5 flex items-center justify-center gap-6 text-[11px] uppercase tracking-wider text-neutral-400">
              <label className="flex cursor-pointer items-center gap-1.5 hover:text-white">
                <input
                  type="radio"
                  name="pref"
                  checked={genderPreference === "all"}
                  onChange={() => setGenderPreference("all")}
                  className="accent-[#FFD629]"
                />
                All
              </label>
              <label className="flex cursor-pointer items-center gap-1.5 hover:text-white">
                <input
                  type="radio"
                  name="pref"
                  checked={genderPreference === "women"}
                  onChange={() => setGenderPreference("women")}
                  className="accent-[#FFD629]"
                />
                Women
              </label>
              <label className="flex cursor-pointer items-center gap-1.5 hover:text-white">
                <input
                  type="radio"
                  name="pref"
                  checked={genderPreference === "men"}
                  onChange={() => setGenderPreference("men")}
                  className="accent-[#FFD629]"
                />
                Men
              </label>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address..."
                className="focus:outline-hidden w-full rounded-full border border-neutral-700 bg-neutral-900 px-5 py-3.5 text-xs text-white placeholder-neutral-500 focus:border-[#FFD629]"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#171717] shadow-md transition-all hover:opacity-95"
              >
                {status === "loading" ? "Saving..." : "Subscribe"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {status === "error" && (
              <p className="mt-2 text-[11px] text-rose-400">Please enter a valid email address.</p>
            )}

            <p className="mt-4 text-[10px] text-neutral-500">
              By subscribing, you agree to receive emails with new offers. You can unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
