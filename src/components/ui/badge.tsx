import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-[9.5px] uppercase font-bold tracking-[0.2em] transition-all rounded-full focus:outline-hidden",
  {
    variants: {
      variant: {
        // === GLOBAL SEMANTIC DESIGN TOKENS ===
        primary:
          "bg-gradient-to-r from-primary-light via-primary to-primary-dark text-primary-foreground font-bold shadow-xs border border-primary/30",
        secondary: "bg-secondary text-secondary-foreground border border-neutral-800",
        muted: "bg-muted text-foreground border border-border",
        accent: "bg-accent text-accent-foreground font-medium border border-accent",
        outline: "text-foreground border border-primary/50 bg-white/70",
        
        // Brand named aliases for compatibility
        champagneGold:
          "bg-gradient-to-r from-primary-light via-primary to-primary-dark text-primary-foreground font-bold shadow-xs border border-primary/30",
        champagneIvory: "bg-muted text-foreground border border-border",
        antiqueGold: "bg-accent text-accent-foreground font-medium border border-accent",
        obsidian: "bg-secondary text-primary border border-primary/40 font-semibold",
        default: "bg-secondary text-secondary-foreground border border-neutral-800",
        gold: "bg-primary text-primary-foreground font-bold",
        terracotta: "bg-accent text-accent-foreground",

        // Optional VOLT Theme variants (retained)
        voltYellow:
          "bg-gradient-to-r from-[#FFE600] to-[#FFF8C5] text-black font-extrabold shadow-xs",
        voltRed: "bg-gradient-to-r from-[#FF3344] to-[#FFA8B5] text-white font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
