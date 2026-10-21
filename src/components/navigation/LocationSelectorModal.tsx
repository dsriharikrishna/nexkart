"use client";

import { useState } from "react";
import { MapPin, X, CheckCircle2, Navigation } from "lucide-react";
import { checkPincodeServiceability } from "@/data/pincodes";
import { detectRealtimeLocation } from "@/lib/location";

interface LocationSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (pincode: string, city: string, deliveryTime: string) => void;
}

export function LocationSelectorModal({
  isOpen,
  onClose,
  onSelectLocation,
}: LocationSelectorModalProps) {
  const [tempPin, setTempPin] = useState("");
  const [pinFeedback, setPinFeedback] = useState<string | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);

  if (!isOpen) return null;

  const handleDetectCurrentLocation = async () => {
    setIsDetecting(true);
    setPinFeedback("Detecting your live location...");
    try {
      const loc = await detectRealtimeLocation();
      onSelectLocation(loc.pincode, loc.city, loc.deliveryTime);
      setPinFeedback(`Found: ${loc.city} (${loc.pincode}) • ${loc.deliveryTime} delivery`);
      setTimeout(() => {
        onClose();
        setPinFeedback(null);
      }, 1500);
    } catch {
      setPinFeedback("Could not detect location. Please enter your PIN code manually.");
    } finally {
      setIsDetecting(false);
    }
  };

  const handleSavePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPin.trim().length === 6) {
      const result = checkPincodeServiceability(tempPin);
      onSelectLocation(result.pincode, result.city, result.deliveryTime);
      if (result.isServiceable) {
        setPinFeedback(`Delivery available! Arrives in ${result.deliveryTime} from ${result.hubName}.`);
        setTimeout(() => {
          onClose();
          setPinFeedback(null);
        }, 1200);
      } else {
        setPinFeedback("Standard courier delivery in 2 to 4 days for this PIN code.");
        setTimeout(() => {
          onClose();
          setPinFeedback(null);
        }, 1800);
      }
    }
  };

  const cities = [
    { name: "⚡ Hyderabad HITEC (500081) • 45m", pin: "500081", city: "Hyderabad (HITEC City)", time: "45 mins" },
    { name: "⚡ Banjara Hills (500034) • 45m", pin: "500034", city: "Hyderabad (Banjara Hills)", time: "45 mins" },
    { name: "⚡ Vizag Port (530001) • 60m", pin: "530001", city: "Visakhapatnam", time: "60 mins" },
    { name: "⚡ Vijayawada (520001) • 60m", pin: "520001", city: "Vijayawada", time: "60 mins" },
    { name: "Bengaluru (560001)", pin: "560001", city: "Bengaluru", time: "60 mins" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4 backdrop-blur-2xs animate-in fade-in duration-200"
    >
      {/* Background touch dismiss layer */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal card: Bottom sheet on mobile, centered card on tablet/desktop */}
      <div className="relative w-full max-w-md rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-250">
        {/* Mobile Pull Handle */}
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-neutral-300 sm:hidden" />

        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF9D6] text-[#FFB800]">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <h3 id="location-modal-title" className="font-heading text-sm font-bold text-[#171717]">
                Select Delivery Location
              </h3>
              <p className="text-[10px] text-neutral-500">
                Check 45–60 min delivery serviceability
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-black active:scale-95 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable content container */}
        <div className="flex-1 overflow-y-auto overscroll-contain pr-0.5 pt-3 pb-2 space-y-4">
          {/* Live GPS Detection Button */}
          <div>
            <button
              type="button"
              onClick={handleDetectCurrentLocation}
              disabled={isDetecting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#FFD629] bg-[#FFF9D6] py-3 px-4 text-xs font-black uppercase tracking-wider text-[#171717] shadow-xs transition-all hover:bg-[#FFD629] active:scale-98"
            >
              <Navigation className={`h-4 w-4 shrink-0 ${isDetecting ? "animate-spin text-neutral-900" : "fill-[#171717]"}`} />
              <span className="truncate">{isDetecting ? "Detecting Live Location..." : "Detect Current Live Location"}</span>
            </button>
          </div>

          <div className="relative my-2 flex items-center justify-center">
            <div className="w-full border-t border-neutral-200" />
            <span className="absolute bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              or enter pin code
            </span>
          </div>

          <form onSubmit={handleSavePin} className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter 6-digit PIN code"
              maxLength={6}
              value={tempPin}
              onChange={(e) => setTempPin(e.target.value.replace(/\D/g, ""))}
              className="flex-1 rounded-full border border-neutral-300 px-4 py-2.5 text-xs font-semibold focus:border-[#FFD629] focus:outline-hidden"
            />
            <button
              type="submit"
              className="rounded-full bg-[#171717] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD629] hover:bg-[#FFD629] hover:text-[#171717] active:scale-95 transition-all"
            >
              Check
            </button>
          </form>

          {pinFeedback && (
            <div className="flex items-start gap-2 rounded-xl bg-[#FFF9D6] p-2.5 text-xs font-medium text-neutral-800">
              <CheckCircle2 className="h-4 w-4 text-[#FFB800] shrink-0 mt-0.5" />
              <span className="leading-snug">{pinFeedback}</span>
            </div>
          )}

          <div className="space-y-2 pt-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#707070]">
              Quick Select Cities:
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              {cities.map((c) => (
                <button
                  key={c.pin}
                  type="button"
                  onClick={() => {
                    onSelectLocation(c.pin, c.city, c.time);
                    onClose();
                  }}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-semibold text-[#171717] hover:border-[#FFD629] hover:bg-[#FFF9D6] active:scale-95 transition-all text-left"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
