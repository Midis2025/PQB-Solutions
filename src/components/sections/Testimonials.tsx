"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChartColumn, Quote } from "lucide-react";
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
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Very light teal curves and dot fields, kept well behind the content */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 size-[32rem] rounded-full bg-brand-tint/70 blur-2xl" />
        <div className="absolute -right-48 top-1/4 size-[36rem] rounded-full bg-brand-tint/60 blur-2xl" />
        <div className="absolute left-0 top-24 h-64 w-24 [background-image:radial-gradient(circle,var(--color-brand-300)_1.1px,transparent_1.1px)] [background-size:14px_14px] opacity-30 [mask-image:radial-gradient(ellipse_at_left,#000,transparent_75%)]" />
        <div className="absolute right-0 top-32 h-72 w-28 [background-image:radial-gradient(circle,var(--color-brand-300)_1.1px,transparent_1.1px)] [background-size:14px_14px] opacity-30 [mask-image:radial-gradient(ellipse_at_right,#000,transparent_75%)]" />
      </div>

      <div className="shell relative">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title={
            <>
              What Our Clients <span className="text-brand-500">Say</span>
            </>
          }
          description="Our clients trust us for our professionalism, accuracy, and commitment to their success."
        />

        <div
          className="mt-12 grid gap-8 lg:grid-cols-[56fr_44fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Testimonial card */}
          <Reveal direction="right" distance={24} className="h-full">
            <div
              className="relative flex h-full min-h-[22rem] flex-col rounded-[1.375rem] border border-brand-200/50 bg-white p-8 shadow-float sm:p-10"
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                aria-hidden="true"
                className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-500"
              >
                <Quote size={24} className="fill-current" />
              </span>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -14 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 flex-1"
                >
                  <p className="text-pretty text-[1.05rem] leading-[1.75] text-ink-700">
                    {active.quote}
                  </p>

                  <footer className="mt-9 flex items-center gap-4">
                    <Image
                      src={active.avatar}
                      alt=""
                      width={60}
                      height={60}
                      loading="lazy"
                      className="size-[60px] rounded-full object-cover ring-2 ring-brand-tint"
                    />
                    <div>
                      <p className="text-[1rem] font-bold text-ink-900">{active.name}</p>
                      <p className="mt-0.5 text-[0.9rem] text-ink-500">{active.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div
                  className="flex items-center gap-0.5"
                  role="tablist"
                  aria-label="Choose a testimonial"
                >
                  {testimonials.map((testimonial, dotIndex) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      role="tab"
                      aria-selected={dotIndex === index}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      onClick={() => goTo(dotIndex)}
                      className="group grid h-11 place-items-center px-2.5"
                    >
                      {/* small dot, generous tap target around it */}
                      <span
                        aria-hidden="true"
                        className={`h-2 rounded-full transition-all duration-300 ${
                          dotIndex === index
                            ? "w-6 bg-brand-500"
                            : "w-2 bg-ink-300/50 group-hover:bg-brand-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <motion.button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Show next testimonial"
                  whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  className="grid size-12 shrink-0 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-soft transition-colors duration-300 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </Reveal>

          {/* Client portrait with floating trust badge */}
          <Reveal direction="left" distance={24} delay={0.1} className="h-full">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.375rem] bg-mint-100 shadow-float">
              <Image
                src="/images/testimonial-client.webp"
                alt="Business client in a navy suit at a laptop in a bright modern office"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover object-[62%_28%]"
              />

              <Quote
                size={56}
                aria-hidden="true"
                className="absolute right-5 top-5 fill-brand-200/80 text-brand-200/80"
              />

              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[16rem]"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 p-3.5 shadow-float backdrop-blur-md">
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-ink"
                  >
                    <ChartColumn size={20} strokeWidth={2} />
                  </span>
                  <p className="text-[0.92rem] font-semibold leading-tight text-ink-900">
                    Trusted by
                    <br />
                    Growing Businesses
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
