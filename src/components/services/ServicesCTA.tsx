"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesCTA() {
  return (
    <section aria-labelledby="services-cta-heading" className="bg-white py-14 sm:py-18 lg:py-20">
      <div className="shell">
        <Reveal direction="up" distance={24}>
          <div className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] bg-[#0C1E2B] px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 shadow-lg">
            {/* Subtle decorative teal corner accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 size-60 rounded-full bg-brand-500/15 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-brand-500/10 blur-2xl"
            />

            {/* Corner curve SVG accent */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 text-brand-500/20"
              viewBox="0 0 128 128"
              fill="none"
            >
              <path
                d="M128 0 C128 70.69 70.69 128 0 128 L128 128 Z"
                fill="currentColor"
              />
              <path
                d="M128 0 C128 70.69 70.69 128 0 128"
                stroke="#24A69A"
                strokeWidth="2.5"
                strokeOpacity="0.4"
              />
            </svg>

            {/* Content Flex Layout */}
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
              {/* Left Copy */}
              <div className="max-w-2xl">
                <h2
                  id="services-cta-heading"
                  className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.2]"
                >
                  Let&apos;s Find the Right Solution for You
                </h2>
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-white/80 sm:text-base">
                  Whether you need accounting support, medical billing assistance or IT solutions,
                  our team is here to understand your needs and help you get started.
                </p>
              </div>

              {/* Desktop Divider */}
              <div
                aria-hidden="true"
                className="hidden lg:block h-20 w-px bg-white/15 self-center"
              />

              {/* Right CTA Button */}
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink-900 shadow-sm transition-all duration-300 hover:bg-brand-50 hover:text-brand-700 hover:gap-3.5 hover:shadow-md"
                >
                  <span>Get in Touch</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

