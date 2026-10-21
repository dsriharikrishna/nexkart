import { UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "./checkout-types";

interface CheckoutPaymentSectionProps {
  register: UseFormRegister<CheckoutFormData>;
  selectedPayment: string;
}

export function CheckoutPaymentSection({
  register,
  selectedPayment,
}: CheckoutPaymentSectionProps) {
  return (
    <div>
      <h2 className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
        <span>2. Payment Method</span>
        <span className="bg-[#FFF9D6] border border-[#FFD629] px-2 py-0.5 text-[10px] font-bold text-[#171717]">
          Demo Test Mode
        </span>
      </h2>

      <div className="space-y-2">
        <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
          <input
            {...register("paymentMethod")}
            type="radio"
            value="upi"
            className="accent-black"
          />
          <div className="flex flex-1 items-center justify-between">
            <span className="text-xs font-semibold text-[#171717]">
              UPI (Google Pay, PhonePe, Paytm, CRED)
            </span>
            <span className="rounded-full bg-[#FFD629] px-2 py-0.5 text-[9px] font-black text-[#171717]">
              FASTEST
            </span>
          </div>
        </label>

        <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
          <input
            {...register("paymentMethod")}
            type="radio"
            value="cod"
            className="accent-black"
          />
          <div className="flex flex-1 items-center justify-between">
            <span className="text-xs font-semibold text-[#171717]">
              Cash on Delivery (Try &amp; Pay at Doorstep)
            </span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-bold text-neutral-700">
              Pay on Delivery
            </span>
          </div>
        </label>

        <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
          <input
            {...register("paymentMethod")}
            type="radio"
            value="card"
            className="accent-black"
          />
          <span className="text-xs font-medium text-neutral-800">Credit / Debit Card (Demo)</span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
          <input
            {...register("paymentMethod")}
            type="radio"
            value="netbanking"
            className="accent-black"
          />
          <span className="text-xs font-medium text-neutral-800">Net Banking (Demo)</span>
        </label>
      </div>

      {selectedPayment === "upi" && (
        <div className="mt-4 space-y-3 border border-neutral-200 bg-[#FAF7F2] p-4">
          <div>
            <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-600">
              UPI ID
            </label>
            <input
              type="text"
              defaultValue="aditya.sharma@okaxis"
              className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800"
            />
            <p className="mt-1 text-[10px] text-neutral-400">
              Works with Google Pay, PhonePe, Paytm, and BHIM.
            </p>
          </div>
        </div>
      )}

      {selectedPayment === "netbanking" && (
        <div className="mt-4 space-y-3 border border-neutral-200 bg-neutral-50 p-4">
          <div>
            <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-600">
              Select Bank
            </label>
            <select
              defaultValue="hdfc"
              className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800"
            >
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
              <option value="sbi">State Bank of India (SBI)</option>
              <option value="axis">Axis Bank</option>
              <option value="kotak">Kotak Mahindra Bank</option>
            </select>
          </div>
        </div>
      )}

      {selectedPayment === "card" && (
        <div className="mt-4 space-y-3 border border-neutral-200 bg-neutral-50 p-4">
          <div>
            <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-500">
              Card Number (Demo)
            </label>
            <input
              type="text"
              defaultValue="•••• •••• •••• 4242"
              disabled
              className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-500">
                Expiry Date
              </label>
              <input
                type="text"
                defaultValue="12 / 28"
                disabled
                className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-500">
                CVV
              </label>
              <input
                type="text"
                defaultValue="888"
                disabled
                className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
