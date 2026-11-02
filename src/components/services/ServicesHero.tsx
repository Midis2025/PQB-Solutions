"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calculator, HeartPulse, Laptop } from "lucide-react";
import { useEffect } from "react";

const serviceHighlights = [
  {
    icon: Calculator,
    title: "Financial Management",
    desc: "Accounting, bookkeeping and taxation support.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Billing",
    desc: "Structured billing and claims management support.",
  },
  {
    icon: Laptop,
    title: "Technology Solutions",
    desc: "IT infrastructure, cloud and technical support.",
  },
];

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
      className="relative overflow-hidden bg-[#0C1E2B] pt-20 lg:pt-0 lg:min-h-[550px] lg:h-[570px] xl:h-[580px] lg:flex lg:items-center"
    >
      {/* Right Column: Corporate Team Collaboration Photograph (~52% width) */}
      <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[52%] overflow-hidden">
        <Image
          src="/images/services-hero-team.webp"
          alt="PQB Solutions professional team collaborating closely over laptops in a modern office"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
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

      {/* Left Content Area within Container (~48% width, vertically centered) */}
      <div className="shell relative z-20 w-full">
        <div className="w-full lg:w-[48%] py-10 sm:py-14 lg:py-6">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
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
              className="mt-3.5 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] lg:leading-[1.16]"
            >
              Business Solutions That Keep You Moving Forward
            </h1>

            {/* Supporting Description */}
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/85 sm:text-base">
              A complete range of solutions in accounting, medical billing and IT to help your
              business operate more efficiently.
            </p>

            {/* Compact Service Highlights with Teal Icons */}
            <ul className="mt-5 space-y-2.5 sm:space-y-3" role="list">
              {serviceHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-brand-400/30 bg-brand-500/20 text-brand-300">
                      <Icon size={13} className="text-brand-300" aria-hidden="true" />
                    </div>
                    <p className="text-xs sm:text-[0.875rem] leading-relaxed text-white/85">
                      <strong className="font-semibold text-white">{item.title}</strong>
                      <span className="text-white/50"> – </span>
                      <span>{item.desc}</span>
                    </p>
                  </li>
                );
              })}
            </ul>

            {/* Dual CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#services-overview"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition-all duration-300 hover:bg-brand-600 hover:gap-2.5 hover:-translate-y-0.5 focus-visible:outline-white"
              >
                <span>Explore Our Services</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-white"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
