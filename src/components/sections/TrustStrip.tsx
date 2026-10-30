import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/site";

const strip = industries.filter((industry) => industry.label !== "And More");

export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-strip-heading"
      className="border-y border-ink-900/5 bg-white py-7 lg:py-8"
    >
      <Reveal className="shell" distance={18}>
        <h2
          id="trust-strip-heading"
          className="text-center font-sans text-[0.75rem] font-medium uppercase tracking-[0.26em] text-ink-900"
        >
          Trusted by Businesses Across Industries
        </h2>

        {/*
          All seven fit in a row from `lg` up. Below that the row scrolls: it is
          focusable so it can be reached by keyboard, and the trailing fade shows
          there is more to the right.
        */}
        <ul
          tabIndex={0}
          aria-label="Industries we serve"
          className="mt-6 flex snap-x snap-mandatory items-stretch overflow-x-auto scroll-smooth rounded-lg outline-offset-4 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:[mask-image:linear-gradient(to_right,#000_0%,#000_92%,transparent_100%)] [&::-webkit-scrollbar]:hidden"
        >
          {strip.map((industry, index) => (
            <li
              key={industry.label}
              className={`group flex min-w-[7rem] flex-1 snap-start flex-col items-center gap-3 px-3 sm:min-w-[8rem] lg:min-w-0 ${
                index > 0 ? "border-l border-ink-900/8" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="grid size-11 place-items-center rounded-full bg-brand-tint text-brand-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-soft"
              >
                <industry.icon size={21} strokeWidth={1.7} />
              </span>
              <span className="whitespace-nowrap text-[0.85rem] font-medium text-ink-900">
                {industry.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
