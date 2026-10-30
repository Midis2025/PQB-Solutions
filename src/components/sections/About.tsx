import Image from "next/image";
import { ArrowRight, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/** Supplied office photograph — 1536x1024, used at its native 3:2 so it never crops. */
const OFFICE_IMAGE_RATIO = "3 / 2";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Soft ambient wash and restrained curved accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-mint-50 via-white to-mint-50" />
        <div className="absolute -right-32 -top-40 size-[34rem] rounded-full bg-brand-100/45 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 size-[32rem] rounded-full bg-brand-100/35 blur-3xl" />
        <div className="absolute -left-72 top-1/3 size-[36rem] rounded-full border border-brand-200/35" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[45fr_55fr] lg:gap-12">
          {/* Copy column */}
          <div className="max-w-xl">
            <Reveal>
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-brand-500">
                About Us
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="about-heading"
                className="mt-5 text-balance text-[2.1rem] leading-[1.12] tracking-[-0.02em] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.4rem]"
              >
                About PQB <span className="text-brand-500">Solutions</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[34rem] text-pretty text-[1.02rem] leading-[1.75] text-ink-500">
                PQB Solutions is a professional services firm committed to
                delivering high-quality accounting, medical billing, and IT
                solutions to businesses across industries. Our goal is to simplify
                your operations, improve efficiency, and support your growth with
                reliable and personalized solutions.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              {/*
                Decorative signature treatment — a script rendering of the
                director's name, not a reproduction of a real handwritten
                signature. Hidden from assistive tech; the name is repeated as
                real text immediately below.
              */}
              <div className="mt-10">
                <div aria-hidden="true" className="w-fit">
                  <span className="block font-script text-[2.9rem] leading-none text-ink-900">
                    {site.director}
                  </span>
                  <svg
                    viewBox="0 0 220 12"
                    className="mt-1 h-3 w-[13rem] text-ink-900"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8.5C38 3.2 96 1.8 150 3.4c26 .8 48 2.6 68 5.1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="mt-5 text-[1rem] font-semibold text-ink-900">
                  {site.director}
                </p>
                <p className="mt-1 text-[0.92rem] text-ink-500">
                  {site.directorTitle}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <a
                href="#services"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-brand-600 px-8 py-[1.05rem] text-[0.95rem] font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-float"
              >
                Learn More About Us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          {/* Image column — runs to the viewport edge on large screens */}
          <div className="relative bleed-right lg:w-auto">
            <Reveal direction="left" distance={30} duration={0.8}>
              <div
                style={{ aspectRatio: OFFICE_IMAGE_RATIO }}
                className="relative w-full overflow-hidden rounded-[1.5rem] bg-mint-100 shadow-float lg:rounded-r-none lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.3)_6%,rgba(0,0,0,0.85)_14%,#000_24%)]"
              >
                <Image
                  src="/images/about-pqb-office.webp"
                  alt="PQB Solutions office interior with the company's branding on the wall, glass-walled meeting rooms and a city skyline beyond"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 92vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            {/* Floating mission card — pulled over the image, never overflowing */}
            <Reveal
              delay={0.45}
              direction="up"
              distance={22}
              className="relative z-10 mx-4 -mt-14 sm:mx-8 sm:-mt-16 lg:absolute lg:bottom-10 lg:right-10 lg:mx-0 lg:mt-0 lg:w-[25rem]"
            >
              <div className="flex items-start gap-5 rounded-[1.25rem] bg-white p-6 shadow-float">
                <span
                  aria-hidden="true"
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500"
                >
                  <Target size={24} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-sans text-[1.05rem] font-bold text-ink-900">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-[1.6] text-ink-500">
                    To deliver accurate, efficient, and innovative solutions that
                    empower businesses to grow.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
