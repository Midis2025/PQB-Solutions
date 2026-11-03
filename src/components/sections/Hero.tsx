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
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7FCFB] to-[#EEF9F7] pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-24 sm:pb-28 lg:pb-36"
    >
      {/* Subtle ambient lighting on the background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-10 left-10 size-[26rem] rounded-full bg-brand-200/[0.18] blur-3xl" />
        <div className="absolute -top-16 right-10 size-[32rem] rounded-full bg-mint-100/60 blur-3xl" />
      </div>

      {/* Main Hero Container with Balanced Layout (Left aligns with .shell, Right centers the image with equal spacing on both sides) */}
      <div className="relative z-20 w-full pl-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] 2xl:pl-[max(2rem,calc((100vw-86rem)/2+2rem))] pr-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] md:pr-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">
          {/* Left Column: Value Proposition & Actions */}
          <div className="w-full lg:w-[480px] xl:w-[530px] shrink-0">
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
                className="mt-4 sm:mt-5 text-balance font-serif text-[clamp(1.9rem,5.5vw,3.15rem)] font-bold leading-[1.14] tracking-[-0.022em] text-[#142C3D]"
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

          {/* Right Column: Centers the Image with perfectly equal spacing on its left and right */}
          <div className="w-full flex-1 flex items-center justify-center px-0 lg:px-8 xl:px-14 2xl:px-20">
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative w-full max-w-[620px] xl:max-w-[700px] 2xl:max-w-[780px]"
            >
              {/* Soft decorative ambient glow behind the card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 sm:-inset-5 rounded-[2.5rem] bg-gradient-to-tr from-brand-300/25 via-mint-200/20 to-brand-400/15 blur-2xl -z-10"
              />

              {/* The Hero Image Card in native 16:9 aspect ratio — 100% visible, uncropped, equal spacing on both sides */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(20,44,61,0.14)] border border-brand-100/70 bg-white">
                <Image
                  src="/images/hero-pqb-team-collaboration.webp"
                  alt="PQB Solutions team collaborating on accounting, medical billing, and IT solutions"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Signature Multi-Layered Bottom Wave flowing into TrustStrip */}
      <HeroBottomWave />
    </section>
  );
}
