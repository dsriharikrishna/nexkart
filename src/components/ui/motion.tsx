"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants, Transition } from "framer-motion";

// Subtle, luxury-calibrated transition presets
export const luxuryTransition: Transition = {
  duration: 0.65,
  ease: [0.215, 0.61, 0.355, 1] as const,
};

export const snappyTransition: Transition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1] as const,
};

// Fade up animation variant for sections and containers
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxuryTransition,
  },
};

// Staggered container for grids and card lists
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Card variant for product cards, banners, and category tiles
export const cardHoverVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: luxuryTransition,
  },
};

// 1. MotionContainer: Top-level page & section wrapper with enter animations
interface MotionContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function MotionContainer({
  children,
  className,
  delay = 0,
  ...props
}: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ ...luxuryTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 2. MotionSection: Scroll-revealing section wrapper (viewport trigger)
export function MotionSection({ children, className, ...props }: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUpVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

// 3. MotionCard: Interactive card with luxury lift on hover
export function MotionCard({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 4. MotionGrid: Staggered grid container for product & category lists
export function MotionGrid({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
