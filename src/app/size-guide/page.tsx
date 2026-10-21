export const metadata = {
  title: "Size Guide — NEXKART",
  description:
    "Find your perfect fit with our clear size charts for men and women.",
};

export default function SizeGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059]">
          FIND YOUR FIT
        </span>
        <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Size Guide
        </h1>
        <p className="text-xs font-light text-neutral-500 sm:text-sm">
          All measurements are in centimeters (cm). Use a measuring tape to find your closest size.
        </p>
      </div>

      <div className="space-y-12">
        {/* Menswear */}
        <div className="border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="mb-4 border-b border-neutral-100 pb-2 font-heading text-base font-bold uppercase tracking-wider text-neutral-950">
            Men&apos;s Clothing (CM)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-200 font-semibold uppercase text-neutral-500">
                  <th className="py-2.5">Size</th>
                  <th className="py-2.5">EU Size</th>
                  <th className="py-2.5">India / UK Size</th>
                  <th className="py-2.5">Chest</th>
                  <th className="py-2.5">Waist</th>
                  <th className="py-2.5">Sleeve Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700">
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">XS</td>
                  <td>44</td>
                  <td>34</td>
                  <td>88 - 92 cm</td>
                  <td>74 - 78 cm</td>
                  <td>82 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">S</td>
                  <td>46</td>
                  <td>36</td>
                  <td>92 - 96 cm</td>
                  <td>78 - 82 cm</td>
                  <td>84 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">M</td>
                  <td>48</td>
                  <td>38</td>
                  <td>96 - 100 cm</td>
                  <td>82 - 86 cm</td>
                  <td>86 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">L</td>
                  <td>50</td>
                  <td>40</td>
                  <td>100 - 104 cm</td>
                  <td>86 - 90 cm</td>
                  <td>88 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">XL</td>
                  <td>52</td>
                  <td>42</td>
                  <td>104 - 108 cm</td>
                  <td>90 - 94 cm</td>
                  <td>90 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Womenswear */}
        <div className="border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="mb-4 border-b border-neutral-100 pb-2 font-heading text-base font-bold uppercase tracking-wider text-neutral-950">
            Women&apos;s Clothing &amp; Dresses (CM)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-200 font-semibold uppercase text-neutral-500">
                  <th className="py-2.5">Size</th>
                  <th className="py-2.5">EU Size</th>
                  <th className="py-2.5">India / UK Size</th>
                  <th className="py-2.5">Bust</th>
                  <th className="py-2.5">Waist</th>
                  <th className="py-2.5">Hips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700">
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">XS</td>
                  <td>38 / 34</td>
                  <td>6</td>
                  <td>80 - 84 cm</td>
                  <td>62 - 66 cm</td>
                  <td>88 - 92 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">S</td>
                  <td>40 / 36</td>
                  <td>8</td>
                  <td>84 - 88 cm</td>
                  <td>66 - 70 cm</td>
                  <td>92 - 96 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">M</td>
                  <td>42 / 38</td>
                  <td>10</td>
                  <td>88 - 92 cm</td>
                  <td>70 - 74 cm</td>
                  <td>96 - 100 cm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-900">L</td>
                  <td>44 / 40</td>
                  <td>12</td>
                  <td>92 - 96 cm</td>
                  <td>74 - 78 cm</td>
                  <td>100 - 104 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
