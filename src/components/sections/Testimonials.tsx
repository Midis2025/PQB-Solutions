"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((next: number) => {
    setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % testimonials.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Our clients trust us for our professionalism, accuracy, and commitment to their success."
        />

        <div
          className="mt-14 grid gap-7 lg:grid-cols-[1.4fr_1fr] lg:gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Reveal direction="right" distance={24} className="h-full">
            <div
              className="relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-ink-900/8 bg-mint-50 p-7 shadow-card sm:p-9"
              aria-live="polite"
              aria-atomic="true"
            >
              <Quote
                size={34}
                aria-hidden="true"
                className="shrink-0 fill-brand-200 text-brand-200"
              />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -14 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 flex-1"
                >
                  <p className="text-pretty text-[0.98rem] leading-relaxed text-ink-700 sm:text-[1.05rem]">
                    {active.quote}
                  </p>

                  <footer className="mt-7 flex items-center gap-3">
                    <Image
                      src={active.avatar}
                      alt=""
                      width={44}
                      height={44}
                      loading="lazy"
                      className="size-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[0.86rem] font-semibold text-ink-900">
                        {active.name}
                      </p>
                      <p className="text-[0.75rem] text-ink-500">{active.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2" role="tablist" aria-label="Choose a testimonial">
                  {testimonials.map((testimonial, dotIndex) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      role="tab"
                      aria-selected={dotIndex === index}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      onClick={() => goTo(dotIndex)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIndex === index
                          ? "w-6 bg-brand-600"
                          : "w-2 bg-ink-300/60 hover:bg-brand-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Show next testimonial"
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" distance={24} delay={0.1} className="h-full">
            <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.25rem] bg-mint-100 shadow-card">
              <Image
                src="/images/testimonial-client.webp"
                alt="Business client in a navy suit at a laptop in a bright modern office"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="object-cover object-[62%_28%]"
              />
              {/* Just enough tint at the top for the quote mark to read */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-deep-900/25 to-transparent"
              />
              <Quote
                size={64}
                aria-hidden="true"
                className="absolute right-4 top-4 fill-brand-200/70 text-brand-200/70"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
