"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calculator, HeartPulse, Laptop } from "lucide-react";
import { useEffect } from "react";

const serviceOptions = [
  {
    icon: Calculator,
    label: "Accounting & Bookkeeping",
  },
  {
    icon: HeartPulse,
    label: "Medical Billing Solutions",
  },
  {
    icon: Laptop,
    label: "IT Solutions",
  },
];

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
      className="relative overflow-hidden bg-[#0C1E2B] pt-20 lg:pt-0 lg:min-h-[440px] lg:h-[465px] xl:h-[480px] lg:flex lg:items-center"
    >
      {/* Right Column: Corporate Team Meeting Photograph (~50% width on desktop; renders first on mobile) */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[50%] overflow-hidden">
        <Image
          src="/images/contact-hero-team.webp"
          alt="PQB Solutions professional team collaborating around a conference table with laptops and reports"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Left Content Area within Container (~50% width, vertically centered) */}
      <div className="shell relative z-20 w-full">
        <div className="w-full lg:w-[50%] py-10 sm:py-12 lg:py-6">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
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
              className="mt-3.5 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] xl:text-[2.55rem] lg:leading-[1.18]"
            >
              Let&apos;s Start a Conversation
            </h1>

            {/* Description */}
            <p className="mt-2.5 max-w-lg text-[0.92rem] leading-relaxed text-white/85 sm:text-[0.975rem]">
              Have a question or looking for the right business support? Tell us what your
              business needs. Our team is here to help you explore the right solutions.
            </p>

            {/* Service Enquiry Overview */}
            <div className="mt-5">
              <span className="block text-[0.6875rem] font-bold tracking-[0.2em] text-brand-300 uppercase">
                HOW CAN WE HELP?
              </span>

              <div className="mt-2.5 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {serviceOptions.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.label}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-xs text-white"
                    >
                      <Icon size={13} className="shrink-0 text-brand-300" aria-hidden="true" />
                      <span className="font-medium">{service.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button: Smooth scroll to #contact-form */}
            <div className="mt-6 sm:mt-7">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition-all duration-300 hover:bg-brand-600 hover:gap-2.5 hover:-translate-y-0.5 focus-visible:outline-white"
              >
                <span>Send an Enquiry</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
