"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, HeartPulse, Laptop } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const servicesData = [
  {
    id: "accounting",
    title: "Accounting, Taxation & Bookkeeping",
    icon: Calculator,
    serviceParam: "accounting",
    ctaText: "Enquire About Accounting",
    description:
      "Comprehensive financial management support that keeps your accounts organised, timely, and compliant with regulatory standards.",
    image: "/images/accounting-services.webp",
    imageAlt: "Professional accountant reviewing financial reports, calculator and laptop",
    bgClass: "bg-white",
    accentBg: "bg-[#EAF7F5]",
    isReversed: false,
    capabilities: [
      "Monthly bookkeeping, ledger maintenance, and accounts reconciliation",
      "Financial statement preparation and periodic cash flow reporting",
      "Corporate tax planning, calculation, and compliance submissions",
      "Payroll administration, wage calculations, and statutory reporting",
    ],
  },
  {
    id: "medical-billing",
    title: "Medical Billing & Solutions",
    icon: HeartPulse,
    serviceParam: "medical-billing",
    ctaText: "Enquire About Medical Billing",
    description:
      "Structured medical billing workflows that help healthcare practices manage claims efficiently and maintain positive revenue cycles.",
    image: "/images/medical-billing.webp",
    imageAlt: "Healthcare professional reviewing medical billing software on a laptop",
    bgClass: "bg-[#EAF7F5]",
    accentBg: "bg-white/70",
    isReversed: true,
    capabilities: [
      "Accurate medical coding review and timely electronic claims filing",
      "Denial management, root-cause tracking, and resubmissions",
      "Payer follow-ups and accounts receivable management",
      "Patient billing statements, remittance posting, and financial reconciliation",
    ],
  },
  {
    id: "it-solutions",
    title: "IT Solutions",
    icon: Laptop,
    serviceParam: "it-solutions",
    ctaText: "Enquire About IT Solutions",
    description:
      "Practical technology support designed to keep your business systems secure, connected, and operating with maximum reliability.",
    image: "/images/it-solutions.webp",
    imageAlt: "IT professional working on a laptop with code and technology management systems",
    bgClass: "bg-white",
    accentBg: "bg-[#EAF7F5]",
    isReversed: false,
    capabilities: [
      "IT infrastructure management, workstation setup, and system integration",
      "Cloud migration, remote collaboration tools, and software administration",
      "Data backup configuration, security protocols, and system monitoring",
      "Ongoing technical maintenance and rapid user support",
    ],
  },
];

export function ServicesOverview() {
  return (
    <div id="services-overview" className="flex flex-col scroll-mt-20">
      {servicesData.map((service) => {
        const Icon = service.icon;

        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className={`scroll-mt-24 ${service.bgClass} py-16 sm:py-20 lg:py-24`}
          >
            <div className="shell">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    service.isReversed
                      ? "order-1 lg:order-2"
                      : "order-1 lg:order-1"
                  }`}
                >
                  <Reveal
                    direction={service.isReversed ? "left" : "right"}
                    distance={24}
                    className="relative"
                  >
                    {/* Decorative pale teal accent layer behind image */}
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-3 sm:-inset-4.5 rounded-[26px] sm:rounded-[30px] ${service.accentBg} -z-10`}
                    />

                    <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] shadow-sm">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={1100}
                        height={489}
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 ${
                    service.isReversed
                      ? "order-2 lg:order-1"
                      : "order-2 lg:order-2"
                  }`}
                >
                  <Reveal
                    direction={service.isReversed ? "right" : "left"}
                    distance={24}
                    delay={0.1}
                  >
                    {/* Icon Badge */}
                    <div
                      aria-hidden="true"
                      className={`grid size-12 shrink-0 place-items-center rounded-xl ${
                        service.isReversed ? "bg-white shadow-xs" : "bg-[#EAF7F5]"
                      } text-brand-500 mb-4 sm:mb-5`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Heading */}
                    <h2
                      id={`${service.id}-heading`}
                      className="font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.25rem] lg:leading-[1.2]"
                    >
                      {service.title}
                    </h2>

                    {/* Comprehensive Description */}
                    <p className="mt-3.5 text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
                      {service.description}
                    </p>

                    {/* Four Detailed Capabilities */}
                    <ul className="mt-6 space-y-3">
                      {service.capabilities.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 text-brand-500 shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-[0.92rem] leading-relaxed text-ink-700">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Enquiry CTA Button */}
                    <div className="mt-8">
                      <Link
                        href={`/contact?service=${service.serviceParam}`}
                        className="group inline-flex items-center gap-2 rounded-full border border-brand-500/80 bg-white px-6 py-2.5 sm:py-3 text-sm font-semibold text-brand-700 shadow-2xs transition-all duration-300 hover:bg-brand-500 hover:text-white hover:gap-3 hover:shadow-soft"
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
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
