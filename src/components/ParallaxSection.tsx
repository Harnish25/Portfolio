"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // -1 to 1 (negative = up, positive = down)
  scale?: boolean;
  rotate?: boolean;
  opacity?: boolean;
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  scale = false,
  rotate = false,
  opacity = false,
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Disable parallax for reduced motion users and mobile screens
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;

    if (prefersReducedMotion || isMobileView) return;

    // Parallax animation with increased power
    const animation: any = {
      y: speed * 200, // Doubled from 100 to 200
    };

    if (scale) {
      animation.scale = 1 + speed * 0.4; // Doubled from 0.2 to 0.4
    }

    if (rotate) {
      animation.rotation = speed * 15; // Tripled from 5 to 15
    }

    if (opacity) {
      animation.opacity = 1 - Math.abs(speed) * 0.5; // Increased from 0.3 to 0.5
    }

    const tl = gsap.to(element, {
      ...animation,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5, // Reduced from 1 to 0.5 for more responsive movement
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed, scale, rotate, opacity]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
