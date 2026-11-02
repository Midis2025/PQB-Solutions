"use client";

import Image from "next/image";
import { ArrowRight, Calculator, CheckCircle2, HeartPulse, Laptop } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesOverview() {
  return (
    <div className="flex flex-col">
      {/* ——— Section 1: Accounting, Taxation & Bookkeeping ——— */}
      <section
        id="accounting"
        aria-labelledby="accounting-heading"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <Reveal direction="right" distance={24} className="relative">
                {/* Pale teal decorative accent layer */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 sm:-inset-4.5 rounded-[26px] sm:rounded-[30px] bg-[#EAF7F5] -z-10"
                />

                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] shadow-sm">
                  <Image
                    src="/images/accounting-services.webp"
                    alt="Professional accountant reviewing financial reports, calculator and laptop"
                    width={1100}
                    height={489}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </Reveal>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <Reveal direction="left" distance={24} delay={0.1}>
                {/* Icon Badge */}
                <div
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500 mb-4 sm:mb-5"
                >
                  <Calculator size={22} strokeWidth={1.8} />
                </div>

                {/* Heading */}
                <h2
                  id="accounting-heading"
                  className="font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.25rem] lg:leading-[1.2]"
                >
                  Accounting, Taxation & Bookkeeping
                </h2>

                {/* Description */}
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
                  Reliable and accurate financial support to help you keep your business
                  compliant, organised and financially healthy.
                </p>

                {/* Two-Column Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Bookkeeping & Accounting
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Financial Reporting
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Tax Preparation & Compliance
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Payroll Support
                    </span>
                  </div>
                </div>

                {/* Learn More Anchor CTA */}
                <div className="mt-7">
                  <a
                    href="#accounting-details"
                    className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Section 2: Medical Billing & Solutions ——— */}
      <section
        id="medical-billing"
        aria-labelledby="medical-billing-heading"
        className="scroll-mt-24 bg-[#EAF7F5] py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            {/* Content Column (Left on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <Reveal direction="right" distance={24} delay={0.1}>
                {/* Icon Badge */}
                <div
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-brand-500 shadow-xs mb-4 sm:mb-5"
                >
                  <HeartPulse size={22} strokeWidth={1.8} />
                </div>

                {/* Heading */}
                <h2
                  id="medical-billing-heading"
                  className="font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.25rem] lg:leading-[1.2]"
                >
                  Medical Billing & Solutions
                </h2>

                {/* Description */}
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
                  End-to-end medical billing support to help healthcare providers improve revenue
                  cycles, reduce claim denials and maintain compliance.
                </p>

                {/* Two-Column Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Medical Billing & Coding
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Denial Management
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Claims Submission & Follow-up
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Revenue Cycle Support
                    </span>
                  </div>
                </div>

                {/* Learn More Anchor CTA */}
                <div className="mt-7">
                  <a
                    href="#medical-billing-details"
                    className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Image Column (Right on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <Reveal direction="left" distance={24} className="relative">
                {/* Decorative background accent */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 sm:-inset-4.5 rounded-[26px] sm:rounded-[30px] bg-white/70 -z-10"
                />

                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] shadow-sm">
                  <Image
                    src="/images/medical-billing.webp"
                    alt="Healthcare professional reviewing medical billing software on a laptop"
                    width={1100}
                    height={489}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Section 3: IT Solutions ——— */}
      <section
        id="it-solutions"
        aria-labelledby="it-solutions-heading"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="shell">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <Reveal direction="right" distance={24} className="relative">
                {/* Pale teal decorative accent layer */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 sm:-inset-4.5 rounded-[26px] sm:rounded-[30px] bg-[#EAF7F5] -z-10"
                />

                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] shadow-sm">
                  <Image
                    src="/images/it-solutions.webp"
                    alt="IT professional working on a laptop with code and technology management systems"
                    width={1100}
                    height={489}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </Reveal>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <Reveal direction="left" distance={24} delay={0.1}>
                {/* Icon Badge */}
                <div
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500 mb-4 sm:mb-5"
                >
                  <Laptop size={22} strokeWidth={1.8} />
                </div>

                {/* Heading */}
                <h2
                  id="it-solutions-heading"
                  className="font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.25rem] lg:leading-[1.2]"
                >
                  IT Solutions
                </h2>

                {/* Description */}
                <p className="mt-3.5 text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
                  Practical and reliable technology solutions to keep your business secure,
                  connected and running smoothly.
                </p>

                {/* Two-Column Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      IT Infrastructure & Support
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      System Setup & Integration
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Cloud Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" strokeWidth={2} />
                    <span className="text-[0.92rem] font-medium text-ink-800">
                      Ongoing IT Maintenance
                    </span>
                  </div>
                </div>

                {/* Learn More Anchor CTA */}
                <div className="mt-7">
                  <a
                    href="#it-solutions-details"
                    className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

