"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from "lucide-react";

/**
 * Bottom decorative wave: Layered SVG curves in pale teal, vibrant brand teal,
 * and deep navy, flowing smoothly across the bottom of the hero section.
 */
function HeroBottomWave() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-px left-0 right-0 w-full overflow-hidden leading-none z-20 select-none"
    >
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        preserveAspectRatio="none"
        className="h-16 sm:h-24 md:h-32 lg:h-36 xl:h-40 w-full"
      >
        {/* Soft pale teal ambient wave */}
        <path
          d="M0,135 C180,115 340,150 500,140 C700,128 880,95 1100,78 C1260,65 1370,75 1440,55 L1440,180 L0,180 Z"
          fill="#E5F6F3"
        />

        {/* Aqua / Pale-teal highlight ribbon */}
        <path
          d="M0,172 C300,172 560,148 800,118 C1040,82 1240,62 1440,32 L1440,180 L0,180 Z"
          fill="#A5E2DA"
          opacity="0.8"
        />

        {/* Vibrant brand teal middle wave */}
        <path
          d="M0,180 C440,180 700,158 940,122 C1160,88 1320,65 1440,42 L1440,180 L0,180 Z"
          fill="#24A69A"
        />

        {/* Deep navy base wave anchor */}
        <path
          d="M360,180 C640,180 860,165 1080,135 C1250,110 1380,92 1440,80 L1440,180 Z"
          fill="#142C3D"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7FCFB] to-[#EEF9F7] pt-20 sm:pt-24 lg:pt-0 lg:min-h-[580px] xl:min-h-[640px] lg:flex lg:items-center pb-16 sm:pb-20 lg:pb-0"
    >
      {/* Subtle ambient lighting on the left */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-10 left-10 size-[26rem] rounded-full bg-brand-200/[0.18] blur-3xl" />
      </div>

      {/* Right Column: Financial Accounting Photograph (~52% width on desktop; renders first on mobile) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[50%] xl:w-[52%] overflow-hidden">
        <Image
          src="/images/hero-calculator-accounting.webp"
          alt="Financial calculations on smartphone, cash notes, and business analytics documents"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover object-[center_45%]"
        />

        {/* Mobile vertical gradient transition into the light hero background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#F7FCFB] via-[#F7FCFB]/30 to-transparent lg:hidden"
        />
      </div>

      {/* Elegant Curved Teal Divider between Left Light background and Right Image on Desktop */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 w-[50%] xl:w-[48%] z-10 pointer-events-none select-none"
      >
        <svg
          className="absolute -right-32 inset-y-0 h-full w-[240px] text-[#F7FCFB]"
          viewBox="0 0 240 680"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Light background Curved Extension */}
          <path d="M 0 0 L 130 0 Q 210 340 130 680 L 0 680 Z" />
          {/* Teal Contour Accent Line */}
          <path
            d="M 130 0 Q 210 340 130 680"
            stroke="#24A69A"
            strokeWidth="3.5"
            strokeOpacity="0.6"
            fill="none"
          />
        </svg>
      </div>

      {/* Left Column Content Area within Container (~50% desktop, vertically centered) */}
      <div className="shell relative z-20 w-full">
        <div className="w-full lg:w-[50%] xl:w-[48%] py-8 sm:py-12 lg:py-24 xl:py-28">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-white px-4 py-1.5 sm:px-4.5 sm:py-2 text-[0.74rem] sm:text-xs font-semibold tracking-wide text-ink-800 shadow-[0_2px_8px_rgba(20,44,61,0.04)]">
              <Layers size={13} className="text-brand-500 shrink-0 sm:size-3.5" strokeWidth={2.2} />
              <span>Your Trusted Partner for Business Growth</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="mt-4 sm:mt-5 text-balance font-serif text-[clamp(1.9rem,6.4vw,3.15rem)] font-bold leading-[1.14] tracking-[-0.022em] text-[#142C3D]"
            >
              Accounting. Medical Billing.
              <br />
              IT Solutions.
              <br />
              <span className="text-brand-500">All Under One Roof.</span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-3.5 sm:mt-4 max-w-xl text-[0.92rem] leading-relaxed text-ink-600 sm:text-base">
              At PQB Solutions, we empower businesses with accurate financial
              management, efficient medical billing, and innovative IT solutions to
              help you focus on what you do best — growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-deep-800 px-7 sm:px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-900 hover:shadow-float focus-visible:outline-brand-500 text-center"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-ink-900/15 bg-white px-7 sm:px-8 py-3.5 text-sm font-semibold text-ink-900 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-soft focus-visible:outline-brand-500 text-center"
              >
                <span>Our Services</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust Indicators: Client Focused, Reliable, Tailored */}
            <div className="mt-8 sm:mt-9 pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-3 items-start gap-2 sm:gap-4 divide-x divide-slate-200/80">
                {/* Indicator 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 px-1 sm:px-0">
                  <div
                    aria-hidden="true"
                    className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500"
                  >
                    <Users size={17} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[0.82rem] sm:text-[0.95rem] font-bold leading-tight text-[#142C3D]">
                      Client Focused
                    </h4>
                    <p className="mt-0.5 text-[0.68rem] sm:text-xs text-ink-500 leading-tight">
                      Personalised Support
                    </p>
                  </div>
                </div>

                {/* Indicator 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 pl-2 sm:pl-4">
                  <div
                    aria-hidden="true"
                    className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500"
                  >
                    <ShieldCheck size={17} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[0.82rem] sm:text-[0.95rem] font-bold leading-tight text-[#142C3D]">
                      Reliable
                    </h4>
                    <p className="mt-0.5 text-[0.68rem] sm:text-xs text-ink-500 leading-tight">
                      &amp; Accurate Services
                    </p>
                  </div>
                </div>

                {/* Indicator 3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 pl-2 sm:pl-4">
                  <div
                    aria-hidden="true"
                    className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500"
                  >
                    <SlidersHorizontal size={17} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-serif text-[0.82rem] sm:text-[0.95rem] font-bold leading-tight text-[#142C3D]">
                      Tailored
                    </h4>
                    <p className="mt-0.5 text-[0.68rem] sm:text-xs text-ink-500 leading-tight">
                      Business Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signature Multi-Layered Bottom Wave flowing into TrustStrip */}
      <HeroBottomWave />
    </section>
  );
}
