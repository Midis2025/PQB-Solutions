"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 6500;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const reduceMotion = useReducedMotion();

  // Responsive cards-per-view detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Maximum slide position so we don't scroll past the end
  const maxIndex = Math.max(0, testimonials.length - visibleCards);
  // Clamped index derived during render (avoids cascading render effects)
  const activeIndex = Math.min(index, maxIndex);

  const handleNext = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (target: number) => {
      setIndex(Math.max(0, Math.min(target, maxIndex)));
    },
    [maxIndex],
  );

  // Autoplay cycle
  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(handleNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, handleNext]);

  // Touch swipe support for mobile & tablet
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    setPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white py-18 lg:py-24"
    >
      <div className="shell relative">
        {/* Section Heading: Clean, centered with teal eyebrow accents */}
        <Reveal direction="up" distance={18} className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-9 sm:w-12 rounded-full bg-brand-500/80" />
            <span className="text-[0.72rem] sm:text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
              TESTIMONIALS
            </span>
            <span className="h-[1.5px] w-9 sm:w-12 rounded-full bg-brand-500/80" />
          </div>

          <h2
            id="testimonials-heading"
            className="mt-3.5 font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]"
          >
            What Our Clients <span className="text-brand-500">Say</span>
          </h2>

          <p className="mt-3.5 max-w-2xl text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
            Our clients trust us for our professionalism, accuracy, and commitment to their success.
          </p>
        </Reveal>

        {/* Carousel Container */}
        <div
          className="mt-12 sm:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Reveal direction="up" distance={20} className="w-full">
            {/* Sliding Track Viewport with Touch Pan */}
            <div
              className="relative w-full overflow-hidden py-1 touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex items-stretch"
                animate={{
                  x: `-${activeIndex * (100 / visibleCards)}%`,
                }}
                transition={{
                  duration: reduceMotion ? 0.2 : 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {testimonials.map((testimonial, itemIdx) => (
                  <div
                    key={testimonial.id}
                    className="w-full shrink-0 px-2.5 sm:w-1/2 sm:px-3 lg:w-1/3 lg:px-3.5 flex"
                    aria-hidden={itemIdx < activeIndex || itemIdx >= activeIndex + visibleCards}
                  >
                    {/* Flat, Elegant Testimonial Card */}
                    <div className="flex h-full w-full flex-col justify-between rounded-[20px] border border-brand-200/50 bg-white p-7 sm:p-8 lg:p-8 shadow-[0_2px_8px_rgba(20,44,61,0.03)] transition-all duration-300 hover:border-brand-300">
                      <div>
                        {/* Small Teal Quote Icon in Pale Teal Circle */}
                        <span
                          aria-hidden="true"
                          className="grid size-11 sm:size-12 shrink-0 place-items-center rounded-full bg-[#EBF7F5] text-brand-500"
                        >
                          <Quote size={20} className="fill-current" />
                        </span>

                        {/* Readable Dark Navy Testimonial Quote */}
                        <blockquote className="mt-6">
                          <p className="text-pretty text-[0.96rem] sm:text-[1rem] leading-[1.72] text-[#142C3D]">
                            “{testimonial.quote}”
                          </p>
                        </blockquote>
                      </div>

                      {/* Thin Light-Grey Divider & Author Details */}
                      <footer className="mt-8 border-t border-slate-100 pt-6">
                        <p className="font-serif text-[1.08rem] sm:text-[1.12rem] font-bold leading-snug text-[#142C3D]">
                          {testimonial.name}
                        </p>
                        <p className="mt-1 text-[0.84rem] text-[#6b7f8e] font-normal leading-normal">
                          {testimonial.role}
                        </p>
                      </footer>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Minimal Flat Carousel Controls */}
            <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4 sm:gap-5">
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="grid size-10 sm:size-10.5 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-ink-900 transition-colors duration-200 hover:border-brand-400 hover:text-brand-600 focus-visible:outline-brand-500"
              >
                <ArrowLeft size={16} strokeWidth={2} />
              </button>

              {/* Minimal 3 Indicators */}
              <div
                className="flex items-center gap-1.5"
                role="tablist"
                aria-label="Testimonial slides"
              >
                {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    role="tab"
                    aria-selected={dotIndex === activeIndex}
                    aria-label={`Go to testimonial slide ${dotIndex + 1}`}
                    onClick={() => goTo(dotIndex)}
                    className="group grid h-9 place-items-center px-1"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIndex === activeIndex
                          ? "w-7 bg-brand-500"
                          : "w-2 bg-slate-200 group-hover:bg-brand-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonials"
                className="grid size-10 sm:size-10.5 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-ink-900 transition-colors duration-200 hover:border-brand-400 hover:text-brand-600 focus-visible:outline-brand-500"
              >
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
