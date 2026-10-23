export interface ProductOffer {
  id: string;
  type: "bank" | "coupon" | "special" | "emi";
  badge: string;
  title: string;
  description: string;
  code?: string;
  terms?: string;
  accentColor?: string;
}

export const PRODUCT_OFFERS: ProductOffer[] = [
  {
    id: "bank-hdfc",
    type: "bank",
    badge: "Bank Offer",
    title: "10% Instant Discount on HDFC Bank Credit & Debit Cards",
    description: "Min purchase of ₹1,999. Max discount up to ₹500. T&C Apply.",
    terms: "Valid on orders above ₹1,999 with HDFC Bank cards. 1 transaction per user.",
    accentColor: "border-blue-200 bg-blue-50/60 text-blue-900",
  },
  {
    id: "bank-icici",
    type: "bank",
    badge: "Bank Offer",
    title: "₹300 Off on ICICI Bank Credit Card EMI Transactions",
    description: "On 3, 6, 9, 12 months tenure. Min cart value ₹2,499.",
    terms: "Applicable on eligible ICICI Credit cards on checkout.",
    accentColor: "border-orange-200 bg-orange-50/60 text-orange-950",
  },
  {
    id: "coupon-festive",
    type: "coupon",
    badge: "Special Coupon",
    title: "Flat ₹250 Off with code NEXKART250",
    description: "Save ₹250 on your first quick-commerce order above ₹1,499.",
    code: "NEXKART250",
    terms: "Limited to first 5,000 shoppers across Hyderabad, Telangana & AP.",
    accentColor: "border-emerald-200 bg-emerald-50/70 text-emerald-950",
  },
  {
    id: "special-super",
    type: "special",
    badge: "Partner Offer",
    title: "Free ₹500 Lifestyle Grooming Kit Voucher",
    description: "Get a complimentary luxury perfume & face mist vial on orders above ₹2,999.",
    terms: "Dispatched together in your 45-min delivery package.",
    accentColor: "border-amber-200 bg-amber-50/70 text-amber-950",
  },
];
