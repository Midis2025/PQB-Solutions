"use client";

import {
  ArrowRight,
  ClipboardCheck,
  MessageCircle,
  RefreshCw,
  Settings,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Learn about your business and requirements.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Plan",
    description: "Identify the right services and processes.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Deliver",
    description: "Implement with quality and accuracy.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Support",
    description: "Stay connected and help with ongoing needs.",
    icon: RefreshCw,
  },
];

export function OurApproach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-white py-12 lg:py-16"
    >
      <div className="shell">
        {/* Wide Pale-Teal Card Container */}
        <div className="rounded-[28px] sm:rounded-[32px] bg-[#EAF7F5] p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Side: Copy */}
            <div className="lg:col-span-5">
              <Reveal direction="right" distance={20}>
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
                  <span className="text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
                    OUR APPROACH
                  </span>
                </div>

                {/* Heading */}
                <h2
                  id="approach-heading"
                  className="mt-3.5 font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.2rem] lg:leading-[1.22]"
                >
                  A Simple, Structured and Collaborative Process
                </h2>

                {/* Description */}
                <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-500 sm:text-base max-w-md">
                  We follow a clear and collaborative approach to understand your needs, define
                  the right solutions and deliver with consistency.
                </p>
              </Reveal>
            </div>

            {/* Right Side: Four Process Steps with Connecting Arrows */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 items-center">
                {steps.map((step, index) => {
                  const isLast = index === steps.length - 1;

                  return (
                    <div key={step.title} className="relative flex flex-col items-center">
                      <Reveal
                        direction="up"
                        distance={16}
                        delay={0.1 + index * 0.08}
                        className="flex flex-col items-center text-center w-full"
                      >
                        {/* Circular Icon in White Container */}
                        <div
                          aria-hidden="true"
                          className="grid size-13 sm:size-14 shrink-0 place-items-center rounded-full bg-white text-brand-500 shadow-xs transition-transform duration-300 hover:scale-105"
                        >
                          <step.icon size={24} strokeWidth={1.8} />
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 font-serif text-[1rem] sm:text-[1.05rem] font-bold text-ink-900 leading-snug">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-1 text-xs text-ink-500 leading-relaxed max-w-[130px]">
                          {step.description}
                        </p>
                      </Reveal>

                      {/* Connecting Arrow (visible on desktop between items) */}
                      {!isLast ? (
                        <div
                          aria-hidden="true"
                          className="hidden sm:block absolute -right-3 top-6 -translate-y-1/2 text-brand-400 z-10"
                        >
                          <ArrowRight size={16} strokeWidth={2.2} />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

