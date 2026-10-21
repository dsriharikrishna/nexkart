import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "shadow-2xs focus-visible:outline-hidden flex h-11 w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 transition-colors file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-neutral-400 focus-visible:border-neutral-950 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
