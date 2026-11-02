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
      className="relative overflow-hidden bg-[#0C1E2B] pt-20 lg:pt-0"
    >
      {/* Right Column: Approved Office Desk Artwork */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%] xl:w-[54%] overflow-hidden">
        <Image
          src="/images/contact-hero-desk.webp"
          alt="Modern corporate office desk with laptop, indoor greenery and office chair"
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
        <div className="w-full lg:w-[48%] py-12 sm:py-16 lg:py-24 lg:pt-32">
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
