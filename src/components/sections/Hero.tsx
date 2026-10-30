import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { heroStats } from "@/lib/site";

/**
 * The hero photograph is supplied pre-composited — the Business Growth chart,
 * Trusted Experts badge and Helping Businesses card are part of the artwork, so
 * nothing is overlaid on it here.
 *
 * On large screens the panel sits flush under the 5rem navbar, occupies the right
 * 48% of the viewport and keeps the artwork's exact 1372:1147 ratio, so it never
 * crops. That makes its height 48vw / 1.196 = 40.13vw, and the hero's min-height
 * is the navbar plus that — about 658px at a 1440px viewport.
 */
const HERO_IMAGE_RATIO = "1372 / 1147";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white [--hero-h:calc(5rem+40.13vw)] lg:min-h-[var(--hero-h)]"
    >
      {/* Ambient wash — restrained, keeps the left side light and airy */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-white via-mint-50 to-brand-50/50" />
        <div className="absolute -left-48 top-0 size-[32rem] rounded-full bg-brand-200/20 blur-3xl" />
      </div>

      {/* Copy column */}
      <div className="shell relative lg:flex lg:min-h-[var(--hero-h)] lg:items-center lg:pt-20">
        <div className="max-w-[40rem] pt-28 pb-10 sm:pt-32 lg:max-w-[min(40rem,48vw)] lg:py-4">
          <Reveal direction="right" distance={18}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200/70 bg-white/90 px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-ink-700 shadow-xs backdrop-blur-sm">
              <Sparkles size={14} className="text-brand-500" />
              Your Trusted Partner for Business Growth
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-8 text-balance text-[2.15rem] leading-[1.12] tracking-[-0.022em] sm:text-[2.6rem] lg:text-[2.4rem] xl:text-[3rem]"
            >
              Accounting. Medical Billing.
              <br className="hidden sm:block" /> IT Solutions.
              <br />
              <span className="text-brand-500">All Under One Roof.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[33rem] text-pretty text-[1.05rem] leading-[1.75] text-ink-500">
              At PQB Solutions, we empower businesses with accurate financial
              management, efficient medical billing, and innovative IT solutions to
              help you focus on what you do best — growing your business.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-deep-800 px-9 py-[1.15rem] text-[0.95rem] font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-900 hover:shadow-float"
              >
                Get a Free Consultation
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink-900/12 bg-white px-9 py-[1.15rem] text-[0.95rem] font-semibold text-ink-900 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-soft"
              >
                Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-11 flex flex-wrap gap-x-10 gap-y-6 lg:mt-10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3.5">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-100/80 text-brand-600"
                  >
                    <stat.icon size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <dt className="font-serif text-[1.4rem] font-semibold leading-none text-brand-500">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-[0.8rem] leading-none text-ink-500">
                      {stat.label}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/*
        Supplied artwork. In flow beneath the copy on small screens; on large
        screens pinned flush under the navbar and out to the right viewport edge.
      */}
      <Reveal
        direction="left"
        distance={30}
        duration={0.8}
        className="relative mx-auto w-[calc(100%-2.5rem)] max-w-lg pb-16 sm:w-[calc(100%-4rem)] sm:max-w-xl md:max-w-2xl lg:absolute lg:right-0 lg:top-20 lg:m-0 lg:w-[48%] lg:max-w-none lg:pb-0"
      >
        <div
          style={{ aspectRatio: HERO_IMAGE_RATIO }}
          className="relative w-full overflow-hidden rounded-3xl shadow-float lg:rounded-none lg:shadow-none lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_9%,rgba(0,0,0,0.75)_18%,#000_30%)]"
        >
          <Image
            src="/images/hero-business-growth-office.webp"
            alt="Business professional holding a tablet in a modern office, alongside cards showing business growth with PQB Solutions and a trusted-experts badge"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 48vw"
            className="object-cover object-center"
          />
        </div>
      </Reveal>
    </section>
  );
}
