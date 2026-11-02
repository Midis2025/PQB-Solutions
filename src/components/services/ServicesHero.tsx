"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function ServicesHero() {
  const reduceMotion = useReducedMotion();

  // Scroll to top on mount after Next.js scroll restoration
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0 });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative overflow-hidden bg-[#0C1E2B] pt-20 lg:pt-0"
    >
      {/* Right Column: Master Office Desk Photograph on desktop */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%] xl:w-[54%] overflow-hidden">
        <Image
          src="/images/services-hero-clean.webp"
          alt="Modern corporate office desk with laptop, green potted plant and natural daylight"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-left lg:[mask-image:linear-gradient(to_right,transparent_0%,black_35px)]"
        />

        {/* Mobile vertical gradient transition */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0C1E2B] via-transparent to-transparent lg:hidden"
        />
      </div>

      {/* Left Content Area */}
      <div className="shell relative z-20">
        <div className="w-full lg:w-[48%] py-14 sm:py-18 lg:py-28 lg:pt-36">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-9 rounded-full bg-brand-400" />
              <span className="text-xs font-bold tracking-[0.22em] text-brand-300 uppercase">
                OUR SERVICES
              </span>
            </div>

            {/* H1 Main Heading */}
            <h1
              id="services-hero-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.18]"
            >
              Comprehensive Business Support Services
            </h1>

            {/* Description */}
            <p className="mt-4.5 max-w-xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
              A complete range of solutions in accounting, medical billing and IT to help your
              business operate more efficiently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

