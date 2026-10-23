import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "./checkout-types";

interface CheckoutDeliveryFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
}

export function CheckoutDeliveryForm({ register, errors }: CheckoutDeliveryFormProps) {
  return (
    <div>
      <h2 className="mb-4 border-b border-neutral-100 pb-2 font-heading text-xs font-bold tracking-tight text-neutral-900">
        1. Delivery &amp; Contact Details
      </h2>
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              Email Address *
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.email && (
              <span className="text-[10px] text-rose-600">Please enter your email</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              Mobile Number (For Delivery OTP) *
            </label>
            <input
              {...register("phone", { required: true, pattern: /^[6-9]\d{9}$/ })}
              type="tel"
              maxLength={10}
              placeholder="e.g. 9849012345"
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.phone && (
              <span className="text-[10px] text-rose-600">Please enter a valid 10-digit mobile number</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              First Name *
            </label>
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.firstName && (
              <span className="text-[10px] text-rose-600">This field is required</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              Last Name *
            </label>
            <input
              {...register("lastName", { required: true })}
              type="text"
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.lastName && (
              <span className="text-[10px] text-rose-600">This field is required</span>
            )}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
            House / Flat No., Street, Area *
          </label>
          <input
            {...register("address", { required: true })}
            type="text"
            className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
          />
          {errors.address && (
            <span className="text-[10px] text-rose-600">This field is required</span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              City *
            </label>
            <input
              {...register("city", { required: true })}
              type="text"
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.city && (
              <span className="text-[10px] text-rose-600">Required</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              State *
            </label>
            <input
              {...register("state", { required: true })}
              type="text"
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.state && (
              <span className="text-[10px] text-rose-600">Required</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              PIN Code *
            </label>
            <input
              {...register("postalCode", { required: true, pattern: /^\d{6}$/ })}
              type="text"
              maxLength={6}
              className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
            />
            {errors.postalCode && (
              <span className="text-[10px] text-rose-600">Enter a valid 6-digit PIN code</span>
            )}
          </div>
          <div>
            <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
              Country
            </label>
            <input
              {...register("country")}
              type="text"
              readOnly
              className="focus:outline-hidden w-full border border-neutral-200 bg-neutral-100 px-3 py-2 text-xs text-neutral-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
