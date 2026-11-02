"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  // Scroll to the very top whenever the About page mounts.
  //
  // Why rAF? Next.js App Router performs its own scroll restoration in a
  // separate effect that runs AFTER our component effects.  Plain
  // window.scrollTo(0, 0) therefore gets overwritten.  Wrapping the call
  // inside requestAnimationFrame pushes it to the next browser paint cycle,
  // which is guaranteed to run AFTER the framework has finished its own
  // scroll work.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0 });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-[#0C1E2B] pt-20 lg:pt-0"
    >
      {/* Right Column: Corporate Team Collaboration Image on desktop */}
      <div className="relative w-full h-[340px] sm:h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[54%]">
        <Image
          src="/images/about-team.webp"
          alt="PQB Solutions professional corporate team collaborating around a laptop in a modern office"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 54vw"
          className="object-cover object-center"
        />

        {/* Mobile vertical gradient transition */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0C1E2B] via-transparent to-transparent lg:hidden"
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
      <div className="shell relative z-20">
        <div className="w-full lg:w-[48%] py-12 sm:py-16 lg:py-28 lg:pt-36">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-9 rounded-full bg-brand-400" />
              <span className="text-xs font-bold tracking-[0.22em] text-brand-300 uppercase">
                ABOUT US
              </span>
            </div>

            {/* H1 Main Heading */}
            <h1
              id="about-hero-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.18]"
            >
              A Trusted Partner for Your Business Operations
            </h1>

            {/* Description */}
            <p className="mt-4.5 max-w-xl text-[0.98rem] leading-relaxed text-white/85 sm:text-base">
              Integrated solutions in accounting, medical billing and IT, designed to help
              businesses run more efficiently, accurately and with greater confidence.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Our Approach Button */}
              <a
                href="#approach"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-600 hover:gap-3 hover:-translate-y-0.5 focus-visible:outline-white"
              >
                <span>Our Approach</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>

              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
