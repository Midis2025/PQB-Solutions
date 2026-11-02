"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function OurStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="bg-white py-18 lg:py-24"
    >
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Office Building Image with Subtle Pale Teal Accent */}
          <div className="lg:col-span-6">
            <Reveal direction="right" distance={24} className="relative">
              {/* Subtle Pale Teal Decorative Accent Layer Behind Image */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4.5 rounded-[26px] sm:rounded-[30px] bg-[#EAF7F5] -z-10"
              />

              {/* Main Corporate Building Photograph */}
              <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] shadow-sm">
                <Image
                  src="/images/about-story.webp"
                  alt="PQB Solutions team having a business discussion in a modern corporate meeting room"
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6">
            <Reveal direction="left" distance={24} delay={0.1}>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
                <span className="text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
                  OUR STORY
                </span>
              </div>

              {/* H2 Heading */}
              <h2
                id="story-heading"
                className="mt-3.5 font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.45rem] lg:leading-[1.2]"
              >
                Simplifying Business Operations Through Practical Solutions
              </h2>

              {/* Description */}
              <p className="mt-4.5 text-[0.98rem] leading-relaxed text-ink-500 sm:text-base">
                PQB Solutions is a business support company that brings together essential
                services under one roof – accounting, medical billing and IT solutions. We work
                with businesses across different industries to help streamline operations,
                maintain accuracy and improve overall efficiency.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

