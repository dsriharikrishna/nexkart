"use client";

import { useToastStore } from "@/stores/toastStore";
import Link from "next/link";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto relative flex items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-[#171717] px-4 py-3 text-white shadow-xl shadow-black/30"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
                <CheckCircle2 className="h-4 w-4 stroke-[2.5]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-white truncate">
                  {toast.title}
                </span>
                {toast.description && (
                  <span className="text-[11px] text-neutral-400 truncate">
                    {toast.description}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {toast.actionHref && (
                <Link
                  href={toast.actionHref}
                  onClick={() => removeToast(toast.id)}
                  className="inline-flex items-center gap-1 rounded-full bg-[#FFD629] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#171717] hover:bg-yellow-400 active:scale-95 transition-all"
                >
                  <span>{toast.actionLabel || "View"}</span>
                  <ArrowRight className="h-3 w-3 stroke-[2.5]" />
                </Link>
              )}
              <button
                onClick={() => removeToast(toast.id)}
                className="text-neutral-400 hover:text-white p-1 rounded-full"
                aria-label="Close notification"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
