"use client";

import {
  ChartNoAxesColumnIncreasing,
  Gem,
  Handshake,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    name: "Integrity",
    description: "We work with honesty and transparency.",
    icon: Gem,
  },
  {
    name: "Client Focus",
    description: "Your business goals remain our priority.",
    icon: Users,
  },
  {
    name: "Excellence",
    description: "We are committed to quality and accuracy.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    name: "Collaboration",
    description: "We believe in working together for better results.",
    icon: Handshake,
  },
  {
    name: "Adaptability",
    description: "We stay flexible to meet evolving business needs.",
    icon: Zap,
  },
];

export function OurCoreValues() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="bg-white py-18 lg:py-24 border-t border-slate-100"
    >
      <div className="shell">
        {/* Centered Section Header */}
        <Reveal direction="up" distance={20} className="flex flex-col items-center text-center">
          {/* Eyebrow flanked with delicate teal rules */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-9 sm:w-12 rounded-full bg-brand-500/80" />
            <span className="text-[0.72rem] sm:text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
              OUR CORE VALUES
            </span>
            <span className="h-[1.5px] w-9 sm:w-12 rounded-full bg-brand-500/80" />
          </div>

          {/* Heading */}
          <h2
            id="values-heading"
            className="mt-3.5 font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.18]"
          >
            The Principles That Guide Us
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-2xl text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
            Our work is driven by a clear set of values that shape how we support our clients
            and build lasting relationships.
          </p>
        </Reveal>

        {/* Five Evenly Spaced Columns with Thin Vertical Dividers */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-slate-200/80">
          {values.map((item, index) => (
            <Reveal
              key={item.name}
              direction="up"
              distance={16}
              delay={index * 0.08}
              className="flex flex-col items-center text-center px-4 sm:px-5 lg:px-6 py-2"
            >
              {/* Outlined Teal Icon */}
              <div
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-xl text-brand-500 transition-transform duration-300 hover:scale-110"
              >
                <item.icon size={30} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="mt-3 font-serif text-[1.12rem] font-bold text-ink-900 leading-snug">
                {item.name}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-[0.84rem] leading-relaxed text-ink-500 max-w-[200px]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

