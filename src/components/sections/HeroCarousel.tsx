"use client";

import { useEffect, useState } from "react";
import type { ContentImage } from "@/types/content";
import { ContentImagePlaceholder } from "@/components/ui/ContentImage";

const SLIDE_DURATION_MS = 2000;

/** Auto-advancing background carousel for the hero section. Falls back to a single static image with 0 or 1 slides. */
export function HeroCarousel({ slides }: { slides: ContentImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src ?? i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
          aria-hidden={i !== activeIndex}
        >
          <ContentImagePlaceholder image={slide} fill priority={i === 0} className="object-cover" />
        </div>
      ))}
    </div>
  );
}
