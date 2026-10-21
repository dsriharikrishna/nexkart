"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, MapPin, LogOut, Check, ChevronRight, Clock } from "lucide-react";
import { useAccountStore } from "@/stores/accountStore";
import { formatCurrency } from "@/lib/utils";
import { luxuryTransition } from "@/components/ui/motion";

export default function AccountPage() {
  const { isAuthenticated, user, orders, login, logout } = useAccountStore();
  const [activeTab, setActiveTab] = useState<"orders" | "profile" | "addresses">("orders");
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      login(emailInput, nameInput || "Alexander Vance");
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={luxuryTransition}
        className="mx-auto max-w-md px-4 py-20"
      >
        <div className="shadow-xs border border-neutral-200 bg-white p-8">
          <span className="mb-2 block text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
            MAISON NEXKART CLIENT PORTAL
          </span>
          <h1 className="mb-6 text-center font-heading text-2xl font-bold tracking-tight text-neutral-950">
            Sign In to Atelier Account
          </h1>

          <form onSubmit={handleDemoLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                Full Name
              </label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="e.g. Alexander Vance"
                className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                Concierge Email
              </label>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="alexander@domain.com"
                required
                className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-neutral-950 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#9E643C]"
            >
              Access Member Profile
            </button>
          </form>

          <p className="mt-6 text-center text-[10px] text-neutral-400">
            Phase 1 simulated client authentication. No actual credentials stored.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Account Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-8 md:flex-row md:items-end">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              MEMBER TIER: {user.memberTier}
            </span>
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-neutral-950">
            Welcome, {user.name}
          </h1>
          <p className="mt-1 text-xs font-light text-neutral-500">
            Client ID: {user.email} • Atelier Member Since {user.joinedDate}
          </p>
        </div>

        <button
          onClick={logout}
          className="inline-flex items-center gap-1.5 self-start border border-neutral-300 px-4 py-2 text-xs uppercase tracking-wider text-neutral-600 transition-colors hover:border-black hover:text-black md:self-auto"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign Out
        </button>
      </div>

      {/* Account Navigation Tabs */}
      <div className="mb-8 flex gap-4 border-b border-neutral-200">
        <button
          onClick={() => setActiveTab("orders")}
          className={`relative pb-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
            activeTab === "orders"
              ? "font-bold text-neutral-950"
              : "text-neutral-500 hover:text-neutral-950"
          }`}
        >
          Order History ({orders.length})
          {activeTab === "orders" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`relative pb-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
            activeTab === "profile"
              ? "font-bold text-neutral-950"
              : "text-neutral-500 hover:text-neutral-950"
          }`}
        >
          Client Profile
          {activeTab === "profile" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("addresses")}
          className={`relative pb-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
            activeTab === "addresses"
              ? "font-bold text-neutral-950"
              : "text-neutral-500 hover:text-neutral-950"
          }`}
        >
          Saved Destinations
          {activeTab === "addresses" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950" />
          )}
        </button>
      </div>

      {/* Tab: Orders */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="border border-neutral-200 bg-white py-16 text-center">
              <Package className="mx-auto mb-3 h-10 w-10 text-neutral-300" />
              <p className="text-xs uppercase tracking-wider text-neutral-500">
                No orders cataloged yet
              </p>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all hover:border-[#D4AF62]/50 hover:shadow-md"
              >
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-100 pb-4 text-xs sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="font-heading font-bold text-neutral-950 transition-colors hover:text-[#8A6A3B]"
                    >
                      {order.orderNumber}
                    </Link>
                    <span className="text-neutral-300">•</span>
                    <span className="text-neutral-500">{order.date}</span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#D4AF62]/40 bg-[#D4AF62]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#101010]">
                      <Clock className="h-2.5 w-2.5 text-[#8A6A3B]" /> 60-Min Wardrobe
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                      <Check className="h-3 w-3" /> {order.status}
                    </span>
                    <span className="font-bold text-neutral-950">
                      {formatCurrency(order.total)}
                    </span>
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="ml-2 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-black"
                      title="View order dossier"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <Link href={`/account/orders/${order.id}`} className="group block space-y-3">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-18 w-14 shrink-0 overflow-hidden border border-neutral-200 bg-neutral-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 text-xs">
                        <p className="font-heading font-semibold text-neutral-900 transition-colors group-hover:text-[#9E643C]">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-neutral-500">
                          {item.color} • Size {item.size} • Qty {item.quantity}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-neutral-900">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </Link>

                <div className="flex items-center justify-between border-t border-neutral-100 pt-3 text-[11px] text-neutral-500">
                  <span>Destination: {order.shippingAddress}</span>
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="font-medium text-[#9E643C] hover:underline"
                  >
                    View Shipment Dossier →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab: Profile */}
      {activeTab === "profile" && (
        <div className="max-w-xl space-y-4 border border-neutral-200 bg-white p-6">
          <h3 className="border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Maison Atelier Member Credentials
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-neutral-50 py-1">
              <span className="text-neutral-500">Full Name</span>
              <span className="font-semibold">{user.name}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-50 py-1">
              <span className="text-neutral-500">Client Email</span>
              <span className="font-semibold">{user.email}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-50 py-1">
              <span className="text-neutral-500">Member Status</span>
              <span className="font-semibold text-[#9E643C]">{user.memberTier}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Dedicated Concierge</span>
              <span className="font-semibold">concierge-india@nexkart.com</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Addresses */}
      {activeTab === "addresses" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative border border-neutral-200 bg-white p-6">
            <span className="absolute right-6 top-6 bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-800">
              Default Destination
            </span>
            <MapPin className="mb-3 h-5 w-5 text-neutral-800" />
            <h4 className="mb-1 font-heading text-xs font-bold uppercase tracking-wider text-neutral-950">
              Residence & Studio
            </h4>
            <p className="text-xs leading-relaxed text-neutral-600">
              Alexander Vance
              <br />
              742 Evergreen Terrace
              <br />
              New York, NY 10021
              <br />
              United States
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
