"use client";

import { motion } from "framer-motion";

interface LogoLoopProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // duration in seconds
}

export function LogoLoop({ children, className = "", speed = 20 }: LogoLoopProps) {
  return (
    <div className={`overflow-hidden flex w-full relative ${className}`}>
      {/* Gradients for smooth edge fade out */}
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex min-w-full items-center gap-16 pr-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        <div className="flex gap-16 items-center flex-nowrap shrink-0 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-16 items-center flex-nowrap shrink-0 opacity-50 grayscale hover:grayscale-0 transition-all duration-300" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
