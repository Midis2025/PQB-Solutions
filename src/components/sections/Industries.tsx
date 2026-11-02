"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Factory,
  GraduationCap,
  HeartPulse,
  House,
  Laptop,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/site";

// Icon mapping per requirement
const iconMap: Record<string, LucideIcon> = {
  healthcare: HeartPulse,
  finance: ChartNoAxesColumnIncreasing,
  retail: ShoppingCart,
  technology: Laptop,
  manufacturing: Factory,
  education: GraduationCap,
  "real-estate": House,
};

export function Industries() {
  const reduceMotion = useReducedMotion();

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.07,
        delayChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const imageCardVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15,
      },
    },
  };

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative overflow-hidden bg-[#FAFBFD] py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* Decorative backdrop elements matching approved design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-[#F7FAF9] via-white to-[#F7FAF9]" />

        {/* Top-left: elegant curved decorative arc and ambient teal wash */}
        <div className="absolute -left-20 -top-20 size-[36rem] rounded-full bg-linear-to-br from-[#d4f3ee]/60 via-[#eaf8f6]/30 to-transparent blur-2xl" />
        <svg
          className="absolute -left-16 -top-16 h-[34rem] w-[34rem] text-brand-300/35"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M 50 450 A 400 400 0 0 1 450 50"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 20 480 A 460 460 0 0 1 480 20"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            className="text-brand-300/25"
          />
        </svg>

        {/* Top-right: subtle 6x4 dot-matrix pattern */}
        <svg
          className="absolute right-6 top-8 sm:right-12 sm:top-10 text-brand-300/60"
          width="110"
          height="72"
          viewBox="0 0 110 72"
          fill="none"
        >
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={9 + c * 18}
                cy={9 + r * 18}
                r="2.2"
                fill="currentColor"
              />
            ))
          )}
        </svg>

        {/* Bottom-right: soft ambient teal curve */}
        <div className="absolute -bottom-28 -right-20 size-[36rem] rounded-full bg-linear-to-tl from-[#d4f3ee]/50 via-[#eaf8f6]/25 to-transparent blur-3xl" />
        <svg
          className="absolute -bottom-24 -right-16 h-[30rem] w-[30rem] text-brand-300/25"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M 50 50 A 400 400 0 0 0 450 450"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow flanked with delicate teal rules */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-9 sm:w-12 rounded-full bg-brand-500/80" />
            <span className="text-[0.72rem] sm:text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
              INDUSTRIES WE SERVE
            </span>
            <span className="h-[1.5px] w-9 sm:w-12 rounded-full bg-brand-500/80" />
          </div>

          {/* Main Heading: Stays on a single line on desktop */}
          <h2
            id="industries-heading"
            className="mt-3 font-serif text-[1.95rem] font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem] text-balance xl:whitespace-nowrap"
          >
            Supporting Businesses Across{" "}
            <span className="text-brand-500">Diverse Industries</span>
          </h2>

          {/* Supporting Description: 2 balanced lines on desktop */}
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-ink-500 sm:text-base">
            We understand the unique challenges of different industries and provide tailored
            solutions to meet their needs.
          </p>
        </motion.div>

        {/* Main Layout: Asymmetric 60% Left Grid + 40% Right Architecture Feature */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 xl:gap-7 items-stretch">
          {/* Left Column: Seven Industry Cards (lg:col-span-7) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-7 lg:gap-4 xl:gap-4.5 flex-1 content-between"
          >
            {industries.map((industry) => {
              const Icon = iconMap[industry.id] || industry.icon || HeartPulse;
              const isFullWidth = industry.id === "real-estate";

              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  className={`h-full ${isFullWidth ? "col-span-1 sm:col-span-2" : ""}`}
                >
                  <a
                    href={industry.href || "#services"}
                    aria-label={`PQB Solutions for ${industry.name}: ${industry.description}`}
                    className="group relative flex h-full min-h-[92px] sm:min-h-[98px] items-center justify-between gap-3.5 rounded-[20px] border border-ink-900/[0.08] bg-white px-4.5 py-4 sm:px-5 sm:py-4.5 shadow-[0_2px_14px_-2px_rgba(20,44,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_12px_28px_-6px_rgba(20,44,61,0.12)]"
                  >
                    {/* Pale teal circular icon container */}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#EBF7F5] text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white sm:size-12.5">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Middle: Industry title & description */}
                    <div className="min-w-0 flex-1 pr-1">
                      <h3 className="font-serif text-[1.08rem] font-bold leading-snug text-ink-900 transition-colors duration-200 group-hover:text-brand-600 sm:text-[1.14rem]">
                        {industry.name}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-500 sm:text-[0.82rem]">
                        {industry.description}
                      </p>
                    </div>

                    {/* Right: Teal arrow */}
                    <div
                      aria-hidden="true"
                      className="shrink-0 text-brand-500 transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      <ArrowRight size={18} strokeWidth={2.2} />
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column: Architectural Photograph Feature Card (lg:col-span-5) */}
          <motion.div
            variants={imageCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:col-span-5 h-full"
          >
            <div className="group relative flex h-full min-h-[440px] sm:min-h-[480px] lg:min-h-0 flex-col justify-end overflow-hidden rounded-[22px] lg:rounded-[24px] border border-ink-900/[0.08] shadow-[0_12px_36px_-8px_rgba(20,44,61,0.16)]">
              {/* Glass Building Photographic Background */}
              <Image
                src="/images/industries-building.webp"
                alt="PQB Solutions modern corporate headquarters building"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Smooth Dark Navy Gradient Overlay Across Lower Half */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B1E29] via-[#0B1E29]/80 via-48% to-transparent"
              />

              {/* Foreground Overlay Content */}
              <div className="relative z-10 flex flex-col items-start p-6 sm:p-7 lg:p-8 xl:p-9">
                {/* Eyebrow with horizontal line accent */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-[#78CCC3] uppercase sm:text-xs">
                    INDUSTRY EXPERTISE
                  </span>
                  <span className="h-[1.5px] w-12 sm:w-16 rounded-full bg-[#78CCC3]/60" />
                </div>

                {/* Heading (2 balanced lines) */}
                <h3 className="mt-2.5 max-w-sm sm:max-w-md font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2rem]">
                  Solutions Tailored to Every Industry
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-xs sm:max-w-sm text-xs sm:text-[0.88rem] leading-relaxed text-white/85">
                  Understanding your business is where better solutions begin.
                </p>

                {/* Teal Pill CTA Button */}
                <a
                  href="#services"
                  className="group/btn mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-600 hover:gap-3 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-white"
                >
                  <span>Explore Our Industries</span>
                  <ArrowRight
                    size={15}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
