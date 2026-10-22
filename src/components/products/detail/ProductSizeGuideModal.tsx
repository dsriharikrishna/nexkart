"use client";

interface ProductSizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProductSizeGuideModal({ isOpen, onClose }: ProductSizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-lg bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-4">
          <h3 className="font-heading text-base font-bold uppercase tracking-wider">
            Size Guide (CM)
          </h3>
          <button
            onClick={onClose}
            className="text-sm text-neutral-400 hover:text-black"
          >
            ✕
          </button>
        </div>
        {/* Visual Measurement Silhouette Diagram */}
        <div className="mb-6 rounded-2xl border border-neutral-200/90 bg-neutral-50 p-4">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
            <svg
              className="h-32 w-28 text-neutral-800"
              viewBox="0 0 100 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-label="Garment Measurement Diagram"
            >
              {/* Garment Silhouette */}
              <path
                d="M 35 15 L 20 28 L 30 38 L 35 32 L 35 105 L 65 105 L 65 32 L 70 38 L 80 28 L 65 15 C 60 22 40 22 35 15 Z"
                fill="#f5f5f5"
                stroke="#171717"
              />
              {/* Chest Measurement Line */}
              <line x1="30" y1="48" x2="70" y2="48" stroke="#FFB800" strokeWidth="2" strokeDasharray="3 2" />
              <circle cx="30" cy="48" r="2.5" fill="#FFB800" />
              <circle cx="70" cy="48" r="2.5" fill="#FFB800" />

              {/* Waist Measurement Line */}
              <line x1="33" y1="68" x2="67" y2="68" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="33" cy="68" r="2" fill="#171717" />
              <circle cx="67" cy="68" r="2" fill="#171717" />

              {/* Hips Measurement Line */}
              <line x1="34" y1="88" x2="66" y2="88" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="34" cy="88" r="2" fill="#171717" />
              <circle cx="66" cy="88" r="2" fill="#171717" />
            </svg>

            <div className="space-y-2 text-[11px] text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB800]" />
                <span className="font-semibold text-neutral-900">Chest:</span> Measured across fullest point
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
                <span className="font-semibold text-neutral-900">Waist:</span> Measured around natural waistline
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
                <span className="font-semibold text-neutral-900">Hips:</span> Measured around fullest hip curve
              </div>
            </div>
          </div>
        </div>

        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-neutral-200 font-semibold uppercase text-neutral-500">
              <th className="py-2">Size</th>
              <th className="py-2">Chest (cm)</th>
              <th className="py-2">Waist (cm)</th>
              <th className="py-2">Hips (cm)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-700">
            <tr>
              <td className="py-2 font-medium">XS / EU 44</td>
              <td className="py-2">88 - 92</td>
              <td className="py-2">74 - 78</td>
              <td className="py-2">90 - 94</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">S / EU 46</td>
              <td className="py-2">92 - 96</td>
              <td className="py-2">78 - 82</td>
              <td className="py-2">94 - 98</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">M / EU 48</td>
              <td className="py-2">96 - 100</td>
              <td className="py-2">82 - 86</td>
              <td className="py-2">98 - 102</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">L / EU 50</td>
              <td className="py-2">100 - 104</td>
              <td className="py-2">86 - 90</td>
              <td className="py-2">102 - 106</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">XL / EU 52</td>
              <td className="py-2">104 - 108</td>
              <td className="py-2">90 - 94</td>
              <td className="py-2">106 - 110</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 border-t border-neutral-200 pt-4 text-right">
          <button
            onClick={onClose}
            className="rounded-full bg-black px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
