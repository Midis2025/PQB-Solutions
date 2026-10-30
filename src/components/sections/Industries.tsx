import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/site";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-mint-50 py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Supporting Businesses Across Diverse Industries"
          description="We understand the unique challenges of different industries and provide tailored solutions to meet their needs."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3 lg:gap-8">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-2 lg:gap-5">
            {industries.map((industry, index) => (
              <li key={industry.label}>
                <Reveal delay={index * 0.05} className="h-full">
                  <div className="group flex h-full min-h-[8.5rem] flex-col items-center justify-center gap-3 rounded-2xl border border-ink-900/8 bg-white p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft">
                    <span
                      aria-hidden="true"
                      className="text-brand-500 transition-transform duration-300 group-hover:scale-110"
                    >
                      <industry.icon size={26} strokeWidth={1.6} />
                    </span>
                    <span className="text-[0.82rem] font-medium text-ink-900">
                      {industry.label}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal direction="left" distance={28} delay={0.15} className="h-full">
            <a
              href="#contact"
              className="group relative block h-full min-h-[16rem] overflow-hidden rounded-3xl bg-deep-800 shadow-soft lg:min-h-full"
            >
              <Image
                src="/images/industries-office-building.webp"
                alt="Glass corporate office towers seen from below"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 92vw, 30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-deep-900/90 via-deep-900/45 to-deep-900/10"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <h3 className="text-pretty text-[1.3rem] leading-tight text-white">
                  Empowering Businesses Across Industries
                </h3>
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition-all duration-300 group-hover:bg-white group-hover:text-brand-700"
                >
                  <ArrowRight size={17} />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
