"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  HeartPulse,
  Laptop,
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
      className="pointer-events-none absolute -bottom-px left-0 right-0 w-full overflow-hidden leading-none z-10 select-none"
    >
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        preserveAspectRatio="none"
        className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-full"
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
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7FCFB] to-[#EEF9F7] pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28 lg:pb-36"
    >
      {/* Subtle ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-1/4 right-1/4 size-[34rem] rounded-full bg-brand-500/[0.06] blur-3xl" />
        <div className="absolute top-10 left-10 size-[26rem] rounded-full bg-brand-200/[0.18] blur-3xl" />
      </div>

      <div className="shell relative z-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* ——— Left Column on Desktop / Top Content on Mobile (~48% desktop) ——— */}
          <div className="lg:col-span-6 xl:col-span-6">
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
                className="mt-4 sm:mt-6 text-balance font-serif text-[clamp(1.9rem,6.8vw,3.25rem)] font-bold leading-[1.14] tracking-[-0.022em] text-[#142C3D]"
              >
                Accounting. Medical Billing.
                <br />
                IT Solutions.
                <br />
                <span className="text-brand-500">All Under One Roof.</span>
              </h1>

              {/* Supporting Description */}
              <p className="mt-4 sm:mt-5 max-w-xl text-[0.92rem] leading-relaxed text-ink-600 sm:text-base">
                At PQB Solutions, we empower businesses with accurate financial
                management, efficient medical billing, and innovative IT solutions to
                help you focus on what you do best — growing your business.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

              {/* Desktop-only Trust Indicators (placed in left column on lg+) */}
              <div className="hidden lg:block mt-10 pt-7 border-t border-slate-200/80">
                <div className="flex flex-wrap items-center gap-6 sm:gap-7 lg:gap-8">
                  {/* Indicator 1 */}
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500"
                    >
                      <Users size={19} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-serif text-[1rem] sm:text-[1.05rem] font-bold leading-tight text-[#142C3D]">
                        Client Focused
                      </h4>
                      <p className="mt-0.5 text-xs text-ink-500 leading-tight">
                        Personalised Support
                      </p>
                    </div>
                  </div>

                  <div aria-hidden="true" className="h-8 w-px bg-slate-200" />

                  {/* Indicator 2 */}
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500"
                    >
                      <ShieldCheck size={19} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-serif text-[1rem] sm:text-[1.05rem] font-bold leading-tight text-[#142C3D]">
                        Reliable
                      </h4>
                      <p className="mt-0.5 text-xs text-ink-500 leading-tight">
                        &amp; Accurate Services
                      </p>
                    </div>
                  </div>

                  <div aria-hidden="true" className="h-8 w-px bg-slate-200" />

                  {/* Indicator 3 */}
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500"
                    >
                      <SlidersHorizontal size={19} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-serif text-[1rem] sm:text-[1.05rem] font-bold leading-tight text-[#142C3D]">
                        Tailored
                      </h4>
                      <p className="mt-0.5 text-xs text-ink-500 leading-tight">
                        Business Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ——— Right Column on Desktop / Mid-Hero Section on Mobile (~52% desktop) ——— */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Desktop Composition (lg+) */}
            <div className="hidden lg:flex relative w-full h-[500px] xl:h-[540px] items-center justify-center">
              {/* Outer dashed circular orbit track */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] xl:size-[460px] rounded-full border-2 border-dashed border-[#24A69A]/35"
              />

              {/* Central White Logo Circle */}
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="relative z-10 size-48 lg:size-52 xl:size-56 rounded-full bg-white p-7 lg:p-8 shadow-[0_16px_40px_-10px_rgba(20,44,61,0.12),0_0_0_10px_rgba(234,247,245,0.9)] border border-[#CDEEE9] flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/pqb-logo-teal.webp"
                    alt="PQB Solutions Logo"
                    width={240}
                    height={129}
                    priority
                    className="max-h-full max-w-full object-contain select-none"
                  />
                </div>
              </motion.div>

              {/* Card 1: Accounting, Taxation & Bookkeeping (Upper Right) */}
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute top-[6%] right-[0%] xl:right-[2%] z-20"
              >
                <div className="rounded-2xl border border-slate-100 bg-white/95 px-5 py-3.5 shadow-[0_12px_28px_-6px_rgba(20,44,61,0.09)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center gap-3.5">
                    <div
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <Calculator size={21} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-[0.88rem] sm:text-[0.92rem] font-bold leading-snug text-[#142C3D]">
                      Accounting, Taxation &amp;
                      <br />
                      Bookkeeping
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Medical Billing & Solutions (Middle Left) */}
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="absolute top-[40%] left-[0%] xl:left-[2%] z-20"
              >
                <div className="rounded-2xl border border-slate-100 bg-white/95 px-5 py-3.5 shadow-[0_12px_28px_-6px_rgba(20,44,61,0.09)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center gap-3.5">
                    <div
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <HeartPulse size={21} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-[0.88rem] sm:text-[0.92rem] font-bold leading-snug text-[#142C3D]">
                      Medical Billing &amp;
                      <br />
                      Solutions
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: IT Solutions (Lower Right) */}
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
                className="absolute bottom-[14%] right-[4%] xl:right-[6%] z-20"
              >
                <div className="rounded-2xl border border-slate-100 bg-white/95 px-5 py-3.5 shadow-[0_12px_28px_-6px_rgba(20,44,61,0.09)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center gap-3.5">
                    <div
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <Laptop size={21} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-[0.88rem] sm:text-[0.92rem] font-bold leading-snug text-[#142C3D]">
                      IT Solutions
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ——— Mobile & Tablet Composition (< 1024px) matching approved Image 2 ——— */}
            <div className="flex lg:hidden flex-col items-center mt-3 sm:mt-6">
              {/* Central Logo & 3 Floating Service Cards Stage */}
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] h-[260px] sm:h-[300px] flex items-center justify-center">
                {/* Circular Dashed Teal Orbit */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-52 sm:size-64 rounded-full border-2 border-dashed border-[#24A69A]/35"
                />

                {/* Central White Circular Logo Container */}
                <div className="relative z-10 size-28 sm:size-36 rounded-full bg-white p-4 sm:p-5 shadow-[0_12px_28px_-6px_rgba(20,44,61,0.12),0_0_0_7px_rgba(234,247,245,0.92)] border border-[#CDEEE9] flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/pqb-logo-teal.webp"
                      alt="PQB Solutions Logo"
                      width={180}
                      height={97}
                      priority
                      className="max-h-full max-w-full object-contain select-none"
                    />
                  </div>
                </div>

                {/* Card 1: Accounting, Taxation & Bookkeeping (Above Logo) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-fit max-w-[94%]">
                  <div className="rounded-2xl border border-slate-100 bg-white/98 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_8px_20px_-4px_rgba(20,44,61,0.08)] flex items-center gap-2.5 sm:gap-3">
                    <div
                      aria-hidden="true"
                      className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <Calculator size={17} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-[0.76rem] sm:text-[0.84rem] font-bold leading-tight text-[#142C3D] whitespace-nowrap">
                      Accounting, Taxation &amp;
                      <br className="hidden xs:inline" /> Bookkeeping
                    </span>
                  </div>
                </div>

                {/* Card 2: Medical Billing & Solutions (Lower-Left of Logo) */}
                <div className="absolute bottom-1 left-0 z-20 max-w-[48%]">
                  <div className="rounded-2xl border border-slate-100 bg-white/98 px-2.5 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_8px_20px_-4px_rgba(20,44,61,0.08)] flex items-center gap-2 sm:gap-2.5">
                    <div
                      aria-hidden="true"
                      className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <HeartPulse size={17} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-[0.72rem] sm:text-[0.82rem] font-bold leading-tight text-[#142C3D]">
                      Medical Billing &amp;
                      <br />
                      Solutions
                    </span>
                  </div>
                </div>

                {/* Card 3: IT Solutions (Lower-Right of Logo) */}
                <div className="absolute bottom-1 right-0 z-20 max-w-[48%]">
                  <div className="rounded-2xl border border-slate-100 bg-white/98 px-3 py-2 sm:px-4 sm:py-2.5 shadow-[0_8px_20px_-4px_rgba(20,44,61,0.08)] flex items-center gap-2 sm:gap-2.5">
                    <div
                      aria-hidden="true"
                      className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <Laptop size={17} strokeWidth={1.8} />
                    </div>
                    <span className="font-sans text-[0.74rem] sm:text-[0.82rem] font-bold leading-tight text-[#142C3D]">
                      IT Solutions
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile-only Trust Indicators (placed below logo composition per Image 2) */}
              <div className="w-full mt-4 sm:mt-6 pt-5 border-t border-slate-200/80">
                <div className="grid grid-cols-3 items-start gap-1 sm:gap-2 divide-x divide-slate-200/80">
                  {/* Indicator 1 */}
                  <div className="flex flex-col items-center text-center px-1 sm:px-2">
                    <div
                      aria-hidden="true"
                      className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500 mb-1.5"
                    >
                      <Users size={17} strokeWidth={1.8} />
                    </div>
                    <h4 className="font-serif text-[0.78rem] sm:text-[0.92rem] font-bold leading-tight text-[#142C3D]">
                      Client Focused
                    </h4>
                    <p className="mt-0.5 text-[0.66rem] sm:text-[0.75rem] text-ink-500 leading-tight">
                      Personalised Support
                    </p>
                  </div>

                  {/* Indicator 2 */}
                  <div className="flex flex-col items-center text-center px-1 sm:px-2">
                    <div
                      aria-hidden="true"
                      className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500 mb-1.5"
                    >
                      <ShieldCheck size={17} strokeWidth={1.8} />
                    </div>
                    <h4 className="font-serif text-[0.78rem] sm:text-[0.92rem] font-bold leading-tight text-[#142C3D]">
                      Reliable
                    </h4>
                    <p className="mt-0.5 text-[0.66rem] sm:text-[0.75rem] text-ink-500 leading-tight">
                      &amp; Accurate Services
                    </p>
                  </div>

                  {/* Indicator 3 */}
                  <div className="flex flex-col items-center text-center px-1 sm:px-2">
                    <div
                      aria-hidden="true"
                      className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-full bg-[#EAF7F5] text-brand-500 mb-1.5"
                    >
                      <SlidersHorizontal size={17} strokeWidth={1.8} />
                    </div>
                    <h4 className="font-serif text-[0.78rem] sm:text-[0.92rem] font-bold leading-tight text-[#142C3D]">
                      Tailored
                    </h4>
                    <p className="mt-0.5 text-[0.66rem] sm:text-[0.75rem] text-ink-500 leading-tight">
                      Business Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Multi-Layered Bottom Wave */}
      <HeroBottomWave />
    </section>
  );
}
