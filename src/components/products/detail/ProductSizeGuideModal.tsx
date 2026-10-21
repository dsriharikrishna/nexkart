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
            className="bg-black px-6 py-2 text-xs font-medium uppercase tracking-wider text-white"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
