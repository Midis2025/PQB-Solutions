"use client";

import {
  ChartNoAxesColumnIncreasing,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    title: "Experienced Team",
    description: "Skilled professionals with domain expertise.",
    icon: Users,
  },
  {
    title: "Integrated Support",
    description: "Multiple business services under one roof.",
    icon: Settings,
  },
  {
    title: "Reliable & Compliant",
    description: "Focused on accuracy, responsible processes and data security.",
    icon: ShieldCheck,
  },
  {
    title: "Business-Focused",
    description: "Solutions designed to improve efficiency and support growth.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export function WhyChooseServices() {
  return (
    <section
      aria-labelledby="why-choose-services-heading"
      className="bg-[#F4F6F8] py-18 lg:py-24"
    >
      <div className="shell">
        {/* Heading Area */}
        <div className="max-w-2xl text-center mx-auto mb-14 lg:mb-16">
          <Reveal direction="up" distance={20}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
              <span className="text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
                WHY CHOOSE PQB SOLUTIONS
              </span>
              <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
            </div>

            {/* H2 Heading */}
            <h2
              id="why-choose-services-heading"
              className="mt-3.5 font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.45rem] lg:leading-[1.2]"
            >
              A Partner You Can Rely On
            </h2>

            {/* Description */}
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">
              We combine industry expertise, process efficiency and a client-focused approach to
              deliver solutions that create real value for your business.
            </p>
          </Reveal>
        </div>

        {/* 4 Feature Columns with Thin Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="py-6 sm:py-8 lg:py-4 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
              >
                <Reveal direction="up" distance={16} delay={0.06 * index}>
                  {/* Teal Outline Icon */}
                  <div
                    aria-hidden="true"
                    className="grid size-14 place-items-center rounded-2xl bg-white text-brand-500 shadow-2xs mb-4"
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-serif text-[1.12rem] font-bold text-ink-900 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-500 max-w-[220px]">
                    {feature.description}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

