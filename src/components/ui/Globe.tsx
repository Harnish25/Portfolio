"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1, // Dark mode for dark background
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3], // Darker base for better contrast
  markerColor: [0 / 255, 217 / 255, 255 / 255], // Cyan to match portfolio
  glowColor: [0.2, 0.8, 1], // Cyan glow
  markers: [
    { location: [28.6139, 77.2090], size: 0.08 }, // New Delhi
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [51.5074, -0.1278], size: 0.07 }, // London
    { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
    { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
    { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
  ],
};

export interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  const onRender = useCallback((state: Record<string, any>) => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      phiRef.current += 0.005;
    }
    state.phi = phiRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const globe = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    // Hide loading state after globe initializes
    setTimeout(() => setIsLoading(false), 500);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [config, onRender]);

  return (
    <div className={cn("relative aspect-square w-full max-w-md", className)}>
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Pulsing circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-32 w-32 rounded-full border-2 border-cyan-400/30 bg-cyan-400/5"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 h-32 w-32 rounded-full border-2 border-fuchsia-400/20 bg-fuchsia-400/5"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Globe Canvas */}
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="size-full [contain:layout_paint_size]"
      />
    </div>
  );
}
