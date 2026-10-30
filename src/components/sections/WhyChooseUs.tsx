import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { advantages } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative overflow-hidden bg-deep-800 py-20 lg:py-24"
    >
      {/* Rich, low-key atmosphere: warm teal pools plus faint curved lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-deep-900 via-deep-800 to-deep-900" />
        <div className="absolute -left-40 -top-32 size-[34rem] rounded-full bg-brand-500/12 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 size-[38rem] rounded-full bg-brand-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-brand-300/[0.06] blur-3xl" />
        <div className="absolute -left-[28rem] top-1/4 size-[46rem] rounded-full border border-white/[0.06]" />
        <div className="absolute -right-[30rem] bottom-0 size-[42rem] rounded-full border border-white/[0.05]" />
      </div>

      <div className="shell relative">
        <SectionHeading
          id="why-us-heading"
          eyebrow="Why Choose PQB Solutions"
          title="Your Success is Our Priority"
          description="We combine industry expertise, advanced technology, and a client-first approach to deliver measurable results."
          tone="dark"
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {advantages.map((advantage, index) => (
            <li key={advantage.title}>
              <Reveal delay={index * 0.09} className="h-full">
                <article className="group h-full rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
                  <span
                    aria-hidden="true"
                    className="grid size-14 place-items-center rounded-full bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                  >
                    <advantage.icon size={24} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-[1.18rem] leading-snug text-ink-900">
                    {advantage.title}
                  </h3>
                  <p className="mt-2.5 text-[0.93rem] leading-[1.6] text-ink-500">
                    {advantage.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
