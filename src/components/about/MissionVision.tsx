"use client";

import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
  return (
    <section
      id="mission-vision"
      aria-label="Our Mission and Vision"
      className="bg-white pb-18 lg:pb-24"
    >
      <div className="shell">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Card 1: Our Mission */}
          <Reveal direction="up" distance={20} className="h-full">
            <div className="flex h-full items-start gap-5 rounded-[22px] bg-[#EAF7F5] p-7 sm:p-8 lg:p-9 transition-all duration-300 hover:-translate-y-0.5">
              {/* Circular Icon Container */}
              <div
                aria-hidden="true"
                className="grid size-13 sm:size-14 shrink-0 place-items-center rounded-full bg-white text-brand-500 shadow-xs"
              >
                <Target size={26} strokeWidth={1.8} />
              </div>

              {/* Text Block */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl sm:text-[1.3rem] font-bold text-ink-900 leading-snug">
                  Our Mission
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-500 sm:text-[0.88rem] sm:leading-relaxed">
                  To deliver reliable, practical and high-quality business solutions that
                  support our clients&apos; operational and growth goals.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Our Vision */}
          <Reveal direction="up" distance={20} delay={0.1} className="h-full">
            <div className="flex h-full items-start gap-5 rounded-[22px] bg-[#EAF7F5] p-7 sm:p-8 lg:p-9 transition-all duration-300 hover:-translate-y-0.5">
              {/* Circular Icon Container */}
              <div
                aria-hidden="true"
                className="grid size-13 sm:size-14 shrink-0 place-items-center rounded-full bg-white text-brand-500 shadow-xs"
              >
                <Eye size={26} strokeWidth={1.8} />
              </div>

              {/* Text Block */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl sm:text-[1.3rem] font-bold text-ink-900 leading-snug">
                  Our Vision
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-500 sm:text-[0.88rem] sm:leading-relaxed">
                  To be a trusted business solutions partner, known for our professionalism,
                  service quality and long-term client relationships.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

