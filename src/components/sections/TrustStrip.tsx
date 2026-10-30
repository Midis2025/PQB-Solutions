"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { industries } from "@/lib/site";

const strip = industries.filter((industry) => industry.label !== "And More");

export function TrustStrip() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    track.scrollBy({ left: direction * track.clientWidth * 0.7, behavior: "smooth" });
  };

  const arrowClass =
    "hidden size-10 shrink-0 place-items-center rounded-full border sm:grid border-ink-900/10 bg-white text-ink-700 shadow-xs transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:border-brand-400 enabled:hover:text-brand-500 enabled:hover:shadow-soft disabled:opacity-25";

  return (
    <section
      aria-labelledby="trust-strip-heading"
      className="border-b border-ink-900/5 bg-white py-[0.9rem]"
    >
      <div className="shell">
        <h2
          id="trust-strip-heading"
          className="eyebrow text-center font-sans text-ink-900"
        >
          Trusted by Businesses Across Industries
        </h2>

        <div className="relative mt-3 flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label="Show previous industries"
            className={arrowClass}
          >
            <ArrowLeft size={16} />
          </button>

          <ul
            ref={trackRef}
            className="flex flex-1 snap-x snap-mandatory items-stretch overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] max-lg:[mask-image:linear-gradient(to_right,#000_0%,#000_88%,transparent_100%)] [&::-webkit-scrollbar]:hidden"
          >
            {strip.map((industry, index) => (
              <li
                key={industry.label}
                className={`flex min-w-[7.5rem] flex-1 snap-start flex-col items-center gap-2 px-3 lg:min-w-0 ${
                  index > 0 ? "border-l border-ink-900/10" : ""
                }`}
              >
                <industry.icon
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="text-deep-800"
                />
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
            className={arrowClass}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
