"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.css";

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus = ({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [completed, setCompleted] = useState(false);
  const stepRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!manualMode) {
      stepRef.current = 0;
      setCompleted(false);
      const interval = setInterval(
        () => {
          stepRef.current += 1;
          if (stepRef.current >= words.length * 2) {
            setCompleted(true);
            setCurrentIndex(-1);
            clearInterval(interval);
          } else {
            setCurrentIndex((prev) => (prev + 1) % words.length);
          }
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const updateRect = () => {
      const parentRect = containerRef.current!.getBoundingClientRect();
      const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      });
    };

    updateRect();

    // Listen for resize and font loading
    window.addEventListener("resize", updateRect);
    document.fonts?.ready.then(updateRect);

    // Setup ResizeObserver for container changes
    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", updateRect);
      resizeObserver.disconnect();
    };
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`focus-word ${manualMode ? "manual" : ""} ${
              isActive && !manualMode ? "active" : ""
            }`}
            style={{
              filter: (reducedMotion || completed)
                ? "blur(0px)" 
                : manualMode
                  ? isActive ? "blur(0px)" : `blur(${blurAmount}px)`
                  : isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: reducedMotion ? "none" : `filter ${animationDuration}s ease`,
            } as React.CSSProperties}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      {!reducedMotion && (
        <motion.div
          className="focus-frame"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: currentIndex >= 0 ? 1 : 0,
          }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut"
          }}
          style={
            {
              "--border-color": borderColor,
              "--glow-color": glowColor,
            } as React.CSSProperties
          }
        >
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>
        </motion.div>
      )}
    </div>
  );
};

export default TrueFocus;
