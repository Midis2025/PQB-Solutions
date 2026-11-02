"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="bg-white pb-20 lg:pb-28"
    >
      <div className="shell">
        {/* Deep Navy Rounded Container with Subtle Teal Accent */}
        <div className="relative overflow-hidden rounded-[26px] bg-[#0C1E2B] px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center shadow-lg">
          {/* Subtle Teal Ambient Glow in the Corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-500/15 blur-3xl select-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -bottom-20 size-72 rounded-full bg-brand-500/10 blur-3xl select-none"
          />

          <Reveal direction="up" distance={18} className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Heading */}
            <h2
              id="about-cta-heading"
              className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2.65rem] lg:leading-[1.2]"
            >
              Let&apos;s Build a Better Way Forward
            </h2>

            {/* Description */}
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/80 sm:text-base max-w-xl">
              Whether you need accounting support, medical billing assistance or IT solutions,
              PQB Solutions is ready to understand your requirements.
            </p>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-600 hover:gap-3 hover:-translate-y-0.5 focus-visible:outline-white"
            >
              <span>Get in Touch</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
