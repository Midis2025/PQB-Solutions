"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { industries } from "@/lib/site";

const strip = industries.filter((industry) => industry.label !== "And More");

export function TrustStrip() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const reduceMotion = useReducedMotion();

  const syncArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    syncArrows();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", syncArrows, { passive: true });
    window.addEventListener("resize", syncArrows);
    return () => {
      track.removeEventListener("scroll", syncArrows);
      window.removeEventListener("resize", syncArrows);
    };
  }, [syncArrows]);

  const scrollBy = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.7,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const arrowClass =
    "grid size-9 shrink-0 place-items-center rounded-full border border-ink-900/10 bg-white text-deep-800 shadow-xs transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:border-brand-300 enabled:hover:bg-brand-tint enabled:hover:text-brand-ink enabled:hover:shadow-soft disabled:opacity-40 sm:size-11";

  return (
    <section
      aria-labelledby="trust-strip-heading"
      className="border-y border-ink-900/5 bg-white py-7 lg:py-8"
    >
      <motion.div
        className="shell"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          id="trust-strip-heading"
          className="text-center font-sans text-[0.72rem] font-medium uppercase tracking-[0.26em] text-ink-900"
        >
          Trusted by Businesses Across Industries
        </h2>

        <div className="relative mt-5 flex items-center gap-2.5 sm:gap-5">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label="Show previous industries"
            aria-controls="industry-track"
            className={arrowClass}
          >
            <ChevronLeft size={17} />
          </button>

          {/*
            Focusable so the row can be scrolled with the keyboard on narrow
            viewports, where seven items will not fit at once.
          */}
          <ul
            ref={trackRef}
            id="industry-track"
            tabIndex={0}
            aria-label="Industries we serve"
            className="flex flex-1 snap-x snap-mandatory items-stretch overflow-x-auto scroll-smooth rounded-lg outline-offset-4 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:[mask-image:linear-gradient(to_right,#000_0%,#000_90%,transparent_100%)] [&::-webkit-scrollbar]:hidden"
          >
            {strip.map((industry, index) => (
              <li
                key={industry.label}
                className={`group flex min-w-[7rem] flex-1 snap-start flex-col items-center gap-3 px-3 sm:min-w-[8rem] lg:min-w-0 ${
                  index > 0 ? "border-l border-ink-900/8" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full bg-brand-tint text-brand-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-soft"
                >
                  <industry.icon size={21} strokeWidth={1.7} />
                </span>
                <span className="whitespace-nowrap text-[0.85rem] font-medium text-ink-900">
                  {industry.label}
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            aria-label="Show more industries"
            aria-controls="industry-track"
            className={arrowClass}
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
