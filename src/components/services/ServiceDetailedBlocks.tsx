"use client";

import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, HeartPulse, Laptop } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const detailedServices = [
  {
    id: "accounting-details",
    serviceParam: "accounting",
    title: "Accounting, Taxation & Bookkeeping",
    icon: Calculator,
    intro:
      "Comprehensive financial management support that keeps your accounts organised, timely, and compliant with regulatory standards.",
    highlights: [
      "Monthly bookkeeping, ledger maintenance, and accounts reconciliation",
      "Financial statement preparation and periodic cash flow reporting",
      "Corporate tax planning, calculation, and compliance submissions",
      "Payroll administration, wage calculations, and statutory reporting",
    ],
    ctaText: "Enquire About Accounting",
  },
  {
    id: "medical-billing-details",
    serviceParam: "medical-billing",
    title: "Medical Billing & Solutions",
    icon: HeartPulse,
    intro:
      "Structured medical billing workflows that help healthcare practices manage claims efficiently and maintain positive revenue cycles.",
    highlights: [
      "Accurate medical coding review and timely electronic claims filing",
      "Denial management, root-cause tracking, and resubmissions",
      "Payer follow-ups and accounts receivable management",
      "Patient billing statements, remittance posting, and financial reconciliation",
    ],
    ctaText: "Enquire About Medical Billing",
  },
  {
    id: "it-solutions-details",
    serviceParam: "it-solutions",
    title: "IT Solutions",
    icon: Laptop,
    intro:
      "Practical technology support designed to keep your business systems secure, connected, and operating with maximum reliability.",
    highlights: [
      "IT infrastructure management, workstation setup, and system integration",
      "Cloud migration, remote collaboration tools, and software administration",
      "Data backup configuration, security protocols, and system monitoring",
      "Ongoing technical maintenance and rapid user support",
    ],
    ctaText: "Enquire About IT Solutions",
  },
];

export function ServiceDetailedBlocks() {
  return (
    <section
      aria-labelledby="detailed-services-heading"
      className="bg-white py-18 lg:py-24 border-t border-slate-100"
    >
      <div className="shell">
        {/* Section Heading */}
        <div className="max-w-2xl text-center mx-auto mb-14 lg:mb-16">
          <Reveal direction="up" distance={20}>
            <div className="inline-flex items-center gap-3">
              <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
              <span className="text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
                DETAILED CAPABILITIES
              </span>
              <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
            </div>

            <h2
              id="detailed-services-heading"
              className="mt-3.5 font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.45rem] lg:leading-[1.2]"
            >
              How We Support Your Business
            </h2>

            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">
              Explore the specific areas where our team provides hands-on expertise to help your
              operations run smoothly.
            </p>
          </Reveal>
        </div>

        {/* 3 Detail Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 flex flex-col justify-between rounded-2xl border border-ink-900/10 bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:border-brand-300 hover:shadow-soft"
              >
                <Reveal direction="up" distance={20} delay={0.08 * index}>
                  <div>
                    {/* Icon Badge */}
                    <div
                      aria-hidden="true"
                      className="grid size-12 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500 mb-5"
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-ink-900 sm:text-[1.3rem] leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Intro */}
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-500">
                      {service.intro}
                    </p>

                    {/* Highlights List */}
                    <ul className="mt-6 space-y-3">
                      {service.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 text-brand-500 shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-[0.88rem] leading-relaxed text-ink-700">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enquiry CTA Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={`/contact?service=${service.serviceParam}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-brand-500/80 bg-mint-50/50 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-500 hover:text-white hover:gap-3"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

