import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-full",
  {
    variants: {
      variant: {
        // === GLOBAL SEMANTIC DESIGN TOKENS ===
        primary:
          "bg-gradient-to-r from-primary-light via-primary to-primary-dark text-primary-foreground font-semibold hover:opacity-95 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] border border-primary/40",
        default:
          "bg-secondary text-secondary-foreground hover:bg-neutral-900 hover:text-primary shadow-sm border border-neutral-800",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-neutral-900 hover:border-primary/50 shadow-xs border border-neutral-800",
        outline:
          "border border-primary/40 bg-white/70 backdrop-blur-xs text-foreground shadow-2xs hover:border-foreground hover:bg-white hover:text-foreground",
        champagneOutline:
          "border border-primary bg-transparent text-foreground hover:bg-primary/10",
        accent: "bg-accent text-accent-foreground hover:opacity-90 shadow-xs",
        antique: "bg-accent text-accent-foreground hover:opacity-90 shadow-xs",
        ghost: "hover:bg-muted/70 hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline hover:text-primary",
        destructive: "bg-destructive text-destructive-foreground hover:opacity-90 shadow-xs",
        atelier: "bg-primary text-primary-foreground hover:bg-secondary hover:text-primary",

        // Optional VOLT Theme variants (retained for compatibility)
        volt: "bg-[#FFE600] text-black hover:bg-[#FFF033] shadow-sm font-bold tracking-[0.2em]",
        outlineVolt:
          "border border-[#FFE600] bg-transparent text-neutral-950 hover:bg-[#FFE600]/15",
        accentRed:
          "bg-gradient-to-r from-[#FF3344] to-[#FFA8B5] text-white hover:opacity-90 shadow-sm",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-12 px-8 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
