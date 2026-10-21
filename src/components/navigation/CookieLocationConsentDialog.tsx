"use client";

import { useState, useEffect } from "react";
import { Cookie, MapPin, X, Check } from "lucide-react";
import { detectRealtimeLocation } from "@/lib/location";

interface CookieLocationConsentDialogProps {
  onLocationDetected?: (pincode: string, city: string, deliveryTime: string) => void;
}

export function CookieLocationConsentDialog({
  onLocationDetected,
}: CookieLocationConsentDialogProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("nexkart_consent_given");
    if (!consentGiven) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  const handleDismiss = () => {
    localStorage.setItem("nexkart_consent_given", "true");
    setIsVisible(false);
  };

  const handleAcceptAll = async () => {
    localStorage.setItem("nexkart_consent_given", "true");
    localStorage.setItem("nexkart_cookies_accepted", "true");
    setIsDetecting(true);

    try {
      const loc = await detectRealtimeLocation();
      onLocationDetected?.(loc.pincode, loc.city, loc.deliveryTime);
    } catch {
      // fallback
      onLocationDetected?.("500081", "Hyderabad (HITEC City)", "45 mins");
    } finally {
      setIsDetecting(false);
      setIsVisible(false);
    }
  };

  return (
    <div className="fixed bottom-[74px] left-3 right-3 z-50 mx-auto max-w-lg animate-in fade-in slide-in-from-bottom-5 duration-300 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#FFD629] bg-[#171717]/95 p-3.5 sm:p-5 text-white shadow-2xl backdrop-blur-md">
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
              <Cookie className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                Cookies &amp; Location Access
              </h4>
              <p className="text-[10px] text-[#FFD629]">
                Enable 45–60 min quick delivery
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="rounded-full p-1 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-[11px] sm:text-xs font-light leading-relaxed text-neutral-300">
          We use cookies to save your cart and ask for location permission to match you with your nearest micro-hub across Telangana &amp; Andhra Pradesh.
        </p>

        <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={handleAcceptAll}
            disabled={isDetecting}
            className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-4 py-2 sm:py-2.5 text-xs font-bold text-[#171717] shadow-md transition-all hover:brightness-105 active:scale-95"
          >
            {isDetecting ? (
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-ping rounded-full bg-black" />
                Detecting Live Location...
              </span>
            ) : (
              <>
                <MapPin className="h-3.5 w-3.5" />
                <span>Allow &amp; Detect Location</span>
              </>
            )}
          </button>

          <button
            onClick={handleDismiss}
            className="flex items-center justify-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-800/80 px-4 py-2 sm:py-2.5 text-xs font-semibold text-neutral-300 hover:border-neutral-500 hover:text-white"
          >
            <Check className="h-3.5 w-3.5" />
            <span>Essential Only</span>
          </button>
        </div>
      </div>
    </div>
  );
}
