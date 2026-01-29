"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  animation?: "fade" | "slide" | "slide-left" | "slide-right" | "zoom";
  threshold?: number;
  rootMargin?: string;
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  animation = "slide",
  threshold = 0,
  rootMargin = "0px",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setShouldAnimate(false);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const getAnimationClass = () => {
    if (!shouldAnimate || !isVisible) return "";
    switch (animation) {
      case "fade": return "animate-fade-in";
      case "slide-left": return "animate-slide-left";
      case "slide-right": return "animate-slide-right";
      case "zoom": return "animate-zoom-in";
      default: return "animate-slide-up";
    }
  };

  const animationClass = getAnimationClass();

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        isVisible ? "opacity-100" : "opacity-0",
        animationClass,
        className
      )}
      style={shouldAnimate ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
