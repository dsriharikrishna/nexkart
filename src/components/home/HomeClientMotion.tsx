"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/components/ui/motion";

export function HeroMotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8"
    >
      {children}
    </motion.div>
  );
}

export function SectionMotionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BannerCardMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
