"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function GlareHover({ children, className = "" }: GlareHoverProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden group ${className}`}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full" />
      {children}
    </motion.div>
  );
}
