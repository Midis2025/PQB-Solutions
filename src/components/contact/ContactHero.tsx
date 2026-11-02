"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function ContactHero() {
  const reduceMotion = useReducedMotion();

  // Scroll to top on mount — runs after Next.js scroll restoration via rAF.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0 });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden bg-[#0C1E2B] pt-20 lg:pt-0 lg:min-h-[540px] xl:min-h-[600px] lg:flex lg:items-center"
    >
      {/* Right Column: Corporate Team Meeting Photograph */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[3/2] lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[54%] overflow-hidden">
        <Image
          src="/images/contact-hero-team.webp"
          alt="PQB Solutions professional team collaborating around a conference table with laptops and reports"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 54vw"
          className="object-cover object-[center_12%]"
        />

        {/* Mobile vertical gradient transition */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0C1E2B] via-[#0C1E2B]/30 to-transparent lg:hidden"
        />
      </div>

      {/* Elegant Curved Teal Divider between Left Navy and Right Image on Desktop */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 w-[50%] z-10 pointer-events-none select-none"
      >
        <svg
          className="absolute -right-32 inset-y-0 h-full w-[240px] text-[#0C1E2B]"
          viewBox="0 0 240 680"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Deep Navy Curved Extension */}
          <path d="M 0 0 L 130 0 Q 210 340 130 680 L 0 680 Z" />
          {/* Teal Contour Accent Line */}
          <path
            d="M 130 0 Q 210 340 130 680"
            stroke="#24A69A"
            strokeWidth="3.5"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Left Content Area within Container */}
      <div className="shell relative z-20 w-full">
        <div className="w-full lg:w-[48%] py-12 sm:py-16 lg:py-24 xl:py-28">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-9 rounded-full bg-brand-400" />
              <span className="text-xs font-bold tracking-[0.22em] text-brand-300 uppercase">
                CONTACT US
              </span>
            </div>

            {/* H1 Main Heading */}
            <h1
              id="contact-hero-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.18]"
            >
              Let&apos;s Start a Conversation
            </h1>

            {/* Description */}
            <p className="mt-4.5 max-w-xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
              Have a question, need more information or want to discuss your
              requirements? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
