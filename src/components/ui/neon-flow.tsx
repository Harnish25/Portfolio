'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

// Helper for random colors
const randomColors = (count: number): string[] => {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
  initialTubeColors?: string[];
  initialLightColors?: string[];
  lightIntensity?: number;
}

export function TubesBackground({
  children,
  className = "",
  enableClickInteraction = true,
  initialTubeColors = ["#f967fb", "#53bc28", "#6958d5"],
  initialLightColors = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
  lightIntensity = 200,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);
  const isInitializing = useRef(false);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current || isInitializing.current) return;
      
      isInitializing.current = true;

      try {
        // Dynamic import from CDN — the exact approach from the 21st.dev component
        const module = await import(
          /* webpackIgnore: true */
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js' as any
        );
        const TubesCursor = (module as any).default ?? module;

        if (!mounted || !canvasRef.current) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: initialTubeColors,
            lights: {
              intensity: lightIntensity,
              colors: initialLightColors,
            },
          },
        });

        tubesRef.current = app;
        
        // Delay showing content to ensure smooth initialization
        requestAnimationFrame(() => {
          if (mounted) {
            setIsLoaded(true);
            isInitializing.current = false;
          }
        });

        const handleResize = () => {
          if (canvasRef.current && tubesRef.current) {
            const width = canvasRef.current.parentElement?.clientWidth || window.innerWidth;
            const height = canvasRef.current.parentElement?.clientHeight || window.innerHeight;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
          }
        };

        window.addEventListener('resize', handleResize);

        cleanup = () => {
          window.removeEventListener('resize', handleResize);
          try {
            tubesRef.current?.dispose?.();
          } catch (e) {
            console.warn('Cleanup error:', e);
          }
        };
      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
        isInitializing.current = false;
        setIsLoaded(true); // Show content even if tubes fail to load
      }
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    const timer = typeof window !== 'undefined' && 'requestIdleCallback' in window
      ? (window as any).requestIdleCallback(initTubes, { timeout: 500 })
      : setTimeout(initTubes, 150);

    return () => {
      mounted = false;
      isInitializing.current = false;
      
      if (typeof timer === 'number') {
        clearTimeout(timer);
      } else if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(timer);
      }
      
      if (cleanup) cleanup();
    };
  }, [initialTubeColors, initialLightColors, lightIntensity]);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;

    const colors = randomColors(initialTubeColors.length);
    const lightsColors = randomColors(initialLightColors.length);

    try {
      tubesRef.current.tubes?.setColors?.(colors);
      tubesRef.current.tubes?.setLightsColors?.(lightsColors);
    } catch (error) {
      console.error("Error updating colors:", error);
    }
  };

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden bg-black", className)}
      onClick={handleClick}
      style={{ cursor: enableClickInteraction ? 'pointer' : 'default' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>

      {/* Loading screen — simple black background while ThreeJS loads */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 bg-black" />
      )}
    </div>
  );
}

export default TubesBackground;
